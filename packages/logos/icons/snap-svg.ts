import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosSnapSvgIcon],svg[logos-snap-svg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:radialgradient id="logosSnapSvg0" cx="16.423%" cy="143%" r="295.571%" fx="16.423%" fy="143%"><svg:stop offset="0%" stop-color="#00BC85"></svg:stop><svg:stop offset="100%" stop-color="#149D91"></svg:stop></svg:radialgradient><svg:radialgradient id="logosSnapSvg1" cx="16.423%" cy="-43%" r="357.004%" fx="16.423%" fy="-43%"><svg:stop offset="0%" stop-color="#00BC85"></svg:stop><svg:stop offset="100%" stop-color="#149D91"></svg:stop></svg:radialgradient><svg:radialgradient id="logosSnapSvg2" cx="11.467%" cy="-40.458%" r="343.189%" fx="11.467%" fy="-40.458%"><svg:stop offset="0%" stop-color="#004473"></svg:stop><svg:stop offset="100%" stop-color="#00345F"></svg:stop></svg:radialgradient><svg:lineargradient id="logosSnapSvg3" x1="50%" x2="50%" y1="-352.926%" y2="96.718%"><svg:stop offset="0%" stop-color="#002E3B"></svg:stop><svg:stop offset="100%" stop-color="#002639"></svg:stop></svg:lineargradient><svg:lineargradient id="logosSnapSvg4" x1="50%" x2="50%" y1="-2.808%" y2="428.759%"><svg:stop offset="0%" stop-color="#002E3B"></svg:stop><svg:stop offset="100%" stop-color="#002639"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosSnapSvg3)" d="M65.7 330.3L.107 362.385l127.292 62l127.64-62.194l-65.76-32.539l-61.928 30.754z"></svg:path><svg:path fill="url(#logosSnapSvg4)" d="M57.602 98.175v-.02l69.93-34.107l69.934 34.106L255.004 62.2L127.484 0L0 62.18v.055l57.554 35.964z"></svg:path><svg:path fill="url(#logosSnapSvg0)" d="m.156 298.428l62.915-30.803l64.714 32.042L.156 362.462z"></svg:path><svg:path fill="url(#logosSnapSvg1)" d="M196.678 99.41v100.768l-70.342 34.424l64.686 32.339l62.979-30.797V62.19l-57.323 35.976z"></svg:path><svg:path fill="url(#logosSnapSvg2)" d="m255.004 298.216l-197.415-98.25V98.182L0 62.23v173.702l255.004 126.321z"></svg:path>`,
})
export class LogosSnapSvgIcon {
  readonly viewBox = input("0 0 256 425")
  readonly width = input("0.61em")
  readonly height = input("1em")
}
