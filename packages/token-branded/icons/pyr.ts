import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPyrIcon],svg[token-branded-pyr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPyr0)" fill-rule="evenodd" d="M12.52 3c.018.36-.225 1.433-1.337 2.837c-.301.381-.646.775-1 1.18C8.906 8.477 7.5 10.085 7.5 11.776c0 1.727.795 2.87 1.193 3.224c.059-.438.448-1.61 1.535-2.79c.334-.364.82-.763 1.347-1.198c1.62-1.333 3.65-3.005 3.026-5.024c0 .52-.395 1.771-1.974 2.615c-1.58.843-2.54 1.87-2.823 2.277c-.036-.196.105-.914.611-1.598l.19-.25c.84-1.104 2.6-3.418 1.915-6.032m-1.04 18c-.017-.36.225-1.433 1.337-2.837c.301-.381.646-.775 1-1.18c1.277-1.46 2.683-3.068 2.683-4.759c0-1.727-.795-2.87-1.193-3.224c-.059.438-.448 1.61-1.535 2.791c-.334.363-.82.762-1.347 1.197c-1.62 1.333-3.65 3.005-3.026 5.024c0-.52.395-1.771 1.974-2.615c1.58-.843 2.54-1.87 2.824-2.277c.035.196-.106.914-.612 1.598l-.19.25c-.84 1.105-2.6 3.418-1.915 6.032" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPyr0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop offset=".352" stop-color="#FCCA08"></svg:stop><svg:stop offset="1" stop-color="#EE6233"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPyrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
