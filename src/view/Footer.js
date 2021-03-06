import React from 'react'
import '../css/global.css'
import '../css/footer.css'
import whale_logo from '../images/icon_whale.png'
import flower_logo from '../images/icon_flower.png'

function Footer() {
    return (
        <div>
           <footer>
        <div class="notice_box">
            <a href="/">공지사항</a>
            <a href="/">서비스 전체보기</a>
        </div>
        <div class="aside_box">
            <div class="area_user">
                <div class="area_user_row">
                    <span class="text_bold-13">Creators</span>
                    <ul>
                        <li><a href="/">크리에이터</a></li>
                        <li><a href="/">스몰비즈니스</a></li>
                    </ul>
                </div>
                <div class="area_user_row">
                    <span class="text_bold-13">Partners</span>
                    <ul>
                        <li><a href="/">비즈니스 광고</a></li>
                        <li><a href="/">스토어 개설</a></li>
                        <li><a href="/">지역업체 등록</a></li>
                    </ul>
                </div>
                <div class="area_user_row">
                    <span class="text_bold-13">Developers</span>
                    <ul>
                        <li><a href="/">네이버 개발자센터</a></li>
                        <li><a href="/">오픈API</a></li>
                        <li><a href="/">오픈소스</a></li>
                        <li><a href="/">네이버 D2</a></li>
                        <li><a href="/">네이버 D2SF</a></li>
                        <li><a href="/">네이버 랩스</a></li>
                    </ul>
                </div>
            </div>
            <div class="area_col">
                <div class="ac_content">
                    <div class="text_bold-13">웨일 브라우저</div>
                    <div class="ac_link"><a href="/">다운받기</a></div>
                </div>
                <a href="/"><img src={whale_logo} class="ac_img" /></a>
            </div>
            <div class="area_col">
                <div class="ac_content">
                    <div class="text_bold-13">프로젝트 꽃</div>
                    <div class="ac_link"><a href="/">바로가기</a></div>
                </div>
                <a href="/"><img src={flower_logo} class="ac_img" /></a>
            </div>
        </div>
        <div class="bottom_box">
            <ul>
                <li><a href="/">회사소개</a></li>
                <li><a href="/">인재채용</a></li>
                <li><a href="/">제휴제안</a></li>
                <li><a href="/">이용약관</a></li>
                <li><a href="/">개인정보처리방침</a></li>
                <li><a href="/">청소년보호정책</a></li>
                <li><a href="/">네이버 정책</a></li>
                <li><a href="/">고객센터</a></li>
                <li><a href="/">&copy; NAVER Corp.</a></li>
            </ul>
        </div>
    </footer>  
        </div>
    )
}

export default Footer
