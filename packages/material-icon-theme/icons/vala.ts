import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeValaIcon],svg[material-icon-theme-vala-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeVala0" x1="25.058" x2="25.058" y1="47.028" y2="39.999" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#212121" stop-opacity="0"></svg:stop><svg:stop offset=".5" stop-color="#212121"></svg:stop><svg:stop offset="1" stop-color="#212121" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeVala1" x1="24" x2="24" y1="5" y2="43" gradientTransform="matrix(1.4324 0 0 1.4363 134.03 -5.86)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#FAFAFA"></svg:stop><svg:stop offset=".063" stop-color="#FAFAFA" stop-opacity=".235"></svg:stop><svg:stop offset=".951" stop-color="#FAFAFA" stop-opacity=".157"></svg:stop><svg:stop offset="1" stop-color="#FAFAFA" stop-opacity=".392"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeVala2" x1="31.293" x2="31.293" y1="5.008" y2="59.329" gradientTransform="translate(136.41 -3.39)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#BA68C8"></svg:stop><svg:stop offset="1" stop-color="#673AB7"></svg:stop></svg:lineargradient><svg:radialgradient id="materialIconThemeVala3" cx="4.993" cy="43.5" r="2.5" gradientTransform="matrix(2.0038 0 0 1.4 27.988 -17.4)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#212121"></svg:stop><svg:stop offset="1" stop-color="#212121" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="materialIconThemeVala4" cx="4.993" cy="43.5" r="2.5" gradientTransform="matrix(2.0038 0 0 1.4 -20.012 -104.4)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#212121"></svg:stop><svg:stop offset="1" stop-color="#212121" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs><svg:g opacity=".6"><svg:path fill="url(#materialIconThemeVala3)" d="M38 40h5v7h-5z" transform="matrix(1.579 0 0 .71429 130.515 24.54)"></svg:path><svg:path fill="url(#materialIconThemeVala4)" d="M-10-47h5v7h-5z" transform="matrix(-1.579 0 0 -.71429 130.515 24.54)"></svg:path><svg:path fill="url(#materialIconThemeVala0)" d="M10 40h28v7H10z" transform="matrix(1.579 0 0 .71429 130.515 24.54)"></svg:path></svg:g><svg:rect width="55" height="55" x="140.91" y="1.11" fill="url(#materialIconThemeVala2)" rx="3" ry="3"></svg:rect><svg:rect width="53" height="53.142" x="141.91" y="2.039" stroke="url(#materialIconThemeVala1)" stroke-linecap="round" stroke-linejoin="round" opacity=".3" rx="2" ry="2"></svg:rect><svg:rect width="55" height="55" x="140.91" y="1.11" stroke="#4A148C" stroke-linecap="round" stroke-linejoin="round" opacity=".5" rx="3" ry="3"></svg:rect><svg:path fill="#9575cd" d="m26.357 57.882l-1.111-47.15q-4.854 1.82-7.583 5.694q-2.698 3.877-2.698 9.64q0 1.314.136 2.157q.167.809.336 1.314q.169.472.305.742q.167.27.167.472q-1.786 0-3.167-.336q-1.383-.372-2.327-1.147q-.91-.773-1.415-2.055q-.473-1.28-.473-3.167q0-2.292.976-4.516q1.011-2.223 2.73-4.213q1.753-1.987 4.08-3.673q2.36-1.685 5.021-2.899q2.695-1.247 5.594-1.92q2.932-.71 5.831-.71q.775 0 1.416.034q.673.033 1.346.1l.608 42.465L50.654 6.45h4.819L36.298 57.883h-9.943z"></svg:path>`,
})
export class MaterialIconThemeValaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
