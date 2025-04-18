import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeViteIcon],svg[vscode-icons-file-type-vite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#vscodeIconsFileTypeVite0)" d="m29.884 6.146l-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.7.7 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z"></svg:path><svg:path fill="url(#vscodeIconsFileTypeVite1)" d="M22.264 2.007L12.54 3.912a.36.36 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222l7.925-15.815a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45"></svg:path><svg:defs><svg:lineargradient id="vscodeIconsFileTypeVite0" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(1.34 1.894)scale(.07142)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#41D1FF"></svg:stop><svg:stop offset="1" stop-color="#BD34FE"></svg:stop></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypeVite1" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(1.34 1.894)scale(.07142)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFEA83"></svg:stop><svg:stop offset=".083" stop-color="#FFDD35"></svg:stop><svg:stop offset="1" stop-color="#FFA800"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class VscodeIconsFileTypeViteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
