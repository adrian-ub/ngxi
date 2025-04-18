import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSdaoIcon],svg[token-branded-sdao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSdao0)" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m2.276-11.53c.207-.895.09-2.05-1.016-3.632c3.976.868 6.49 5.193 5.41 9.047a6.82 6.82 0 0 1-3.234 4.225c-1.329.741-3.267 1.323-4.701.54a2.71 2.71 0 0 1-1.33-2.79c.176-.873.806-1.731 1.478-2.541c.36-.434.741-.847 1.117-1.27l.582-.641c.752-.853 1.435-1.864 1.684-2.939z"></svg:path><svg:path fill="#203BDB" d="M6.203 8.293c3.15-3.378 7.026-2.457 7.026-2.457l-.075-.084c-.423-.106-4.33-.794-6.95 2.54"></svg:path><svg:path fill="url(#tokenBrandedSdao1)" d="M15.44 19.11c-1.328.74-3.266 1.323-4.7.54a2.71 2.71 0 0 1-1.33-2.79c.175-.874.805-1.732 1.478-2.542c.36-.434.74-.847 1.117-1.27l.582-.64c-.995 1.047-2.51 1.561-3.6 2.403c-1.085.83-1.43 2.086-1.143 3.425c.301 1.376 1.328 2.647 3.806 2.753c1.551.069 2.764-.953 3.79-1.88"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSdao0" x1="21" x2="3" y1="12.016" y2="12.016" gradientUnits="userSpaceOnUse"><svg:stop offset=".11" stop-color="#E25900"></svg:stop><svg:stop offset=".2" stop-color="#CBC91E"></svg:stop><svg:stop offset=".35" stop-color="#2DE2C1"></svg:stop><svg:stop offset=".46" stop-color="#3093D3"></svg:stop><svg:stop offset=".7" stop-color="#2024DE"></svg:stop><svg:stop offset="1" stop-color="#2624DF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSdao1" x1="9.644" x2="7.743" y1="16.304" y2="16.388" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#203BDB"></svg:stop><svg:stop offset="1" stop-color="#2133DD" stop-opacity=".4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSdaoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
