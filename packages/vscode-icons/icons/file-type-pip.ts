import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypePipIcon],svg[vscode-icons-file-type-pip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypePip0" x1="17.649" x2="28.104" y1="8.845" y2="19.301" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#387eb8"></svg:stop><svg:stop offset="1" stop-color="#366994"></svg:stop></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypePip1" x1="10.011" x2="20.363" y1="22.109" y2="11.758" gradientTransform="matrix(1 0 0 -1 0 32.257)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ffe052"></svg:stop><svg:stop offset="1" stop-color="#ffc331"></svg:stop></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypePip2" x1="-.155" x2="10.301" y1="8.846" y2="19.301" href="#vscodeIconsFileTypePip0"></svg:lineargradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypePip0)" d="m24.989 7.936l-.028-.009c-5.58 0-5.15 2.794-5.15 2.794v10.605s-.006 2.749 2.562 2.749h.018c2.513 0 2.51-2.747 2.51-2.747V16.52h2.972C30 16.52 30 15.159 30 15.159v-4.913s.333-2.31-5.011-2.31m3.7 2.541a.914.914 0 1 1-.89-.936l-.024.007a.914.914 0 0 1 .914.914z"></svg:path><svg:path fill="url(#vscodeIconsFileTypePip1)" d="M16.01 24.073h-.017c-2.561 0-2.561-3.585-2.561-3.585v-8.78s-.007-3.531 2.561-3.524h.018c2.51 0 2.51 3.524 2.51 3.524v8.78s0 3.584-2.511 3.585m.947-2.3a.914.914 0 1 0-.89.937l-.024-.007a.914.914 0 0 0 .914-.914Z"></svg:path><svg:path fill="url(#vscodeIconsFileTypePip2)" d="m7.186 7.936l-.028-.012c-5.58 0-5.15 2.794-5.15 2.794v10.608s-.008 2.75 2.56 2.75h.018c2.513 0 2.51-2.747 2.51-2.747V16.52h2.971c2.129 0 2.124-1.361 2.124-1.361v-4.913s.335-2.31-5.005-2.31m3.7 2.541A.914.914 0 1 1 10 9.54l-.024.007a.914.914 0 0 1 .914.914v.015Z"></svg:path>`,
})
export class VscodeIconsFileTypePipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
