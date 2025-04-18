import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSolIcon],svg[token-branded-sol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSol0)" d="M18.413 7.903a.62.62 0 0 1-.411.164H3.58c-.512 0-.77-.585-.416-.929l2.368-2.283a.6.6 0 0 1 .41-.169h14.479c.517 0 .77.59.41.934z"></svg:path><svg:path fill="url(#tokenBrandedSol1)" d="M18.413 19.157a.6.6 0 0 1-.411.157H3.58c-.512 0-.77-.58-.416-.923l2.368-2.289a.6.6 0 0 1 .41-.163h14.479c.517 0 .77.585.41.928z"></svg:path><svg:path fill="url(#tokenBrandedSol2)" d="M18.413 10.472a.6.6 0 0 0-.411-.158H3.58c-.512 0-.77.58-.416.922l2.368 2.29a.62.62 0 0 0 .41.163h14.479c.517 0 .77-.585.41-.928z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSol0" x1="3.001" x2="21.431" y1="16.322" y2="15.591" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#599DB0"></svg:stop><svg:stop offset="1" stop-color="#47F8C3"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSol1" x1="3.001" x2="21.323" y1="16.973" y2="16.366" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C44FE2"></svg:stop><svg:stop offset="1" stop-color="#73B0D0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSol2" x1="4.035" x2="20.302" y1="12.002" y2="12.002" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#778CBF"></svg:stop><svg:stop offset="1" stop-color="#5DCDC9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
