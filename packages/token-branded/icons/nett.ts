import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNettIcon],svg[token-branded-nett-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNett0)" d="m8.149 12l-5 6.214c-.175-.103-.16-.391-.133-.525L4.256 12z"></svg:path><svg:path fill="url(#tokenBrandedNett1)" d="M11.714 14.546L8.155 12l-5.01 6.224c.113.139.396.103.52.062z"></svg:path><svg:path fill="#54CCFF" d="M8.154 12H4.25a1221 1221 0 0 1 1.739-6.141c.051-.17.22-.299.303-.34z"></svg:path><svg:path fill="#A2AFFE" d="M6.853 5.523c-.216-.144-.463-.061-.566 0l1.872 6.482l8.38.509C13.4 10.27 7.073 5.673 6.852 5.524"></svg:path><svg:path fill="#3189F7" d="M11.72 14.562L8.15 12l3.96.21z"></svg:path><svg:path fill="url(#tokenBrandedNett2)" d="m16.528 12.514l-4.424-.319l-.4 2.35l6.362 3.869c.139.092.442.273.576.273c.139 0 .278-.036.334-.052l-2.453-6.12z"></svg:path><svg:path fill="url(#tokenBrandedNett3)" d="M20.2 12.422h-3.754l2.52 6.214c.32-.072.504-.402.546-.551l.689-5.658z"></svg:path><svg:path fill="url(#tokenBrandedNett4)" d="M16.483 12.514L12.522 9.63l7.612-4.182c.067-.072.278-.19.577-.103s.308.442.277.607l-.802 6.563z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedNett0" x1="11.991" x2="11.991" y1="5.324" y2="18.687" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#38C2FF"></svg:stop><svg:stop offset="1" stop-color="#2698EE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNett1" x1="12.001" x2="12.001" y1="5.313" y2="18.685" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4196FF"></svg:stop><svg:stop offset="1" stop-color="#2588FD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNett2" x1="12" x2="9.89" y1="5.313" y2="14.551" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4583FC"></svg:stop><svg:stop offset="1" stop-color="#307EFA"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNett3" x1="12.197" x2="12.197" y1="5.313" y2="18.643" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#718CFD"></svg:stop><svg:stop offset="1" stop-color="#5A86FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNett4" x1="20.571" x2="17.002" y1="5.776" y2="12.535" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A796F6"></svg:stop><svg:stop offset="1" stop-color="#999FFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedNettIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
