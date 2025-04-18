import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeWpmlIcon],svg[vscode-icons-file-type-wpml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeWpml0" x1="21.531" x2="25.042" y1="22.766" y2="28.463" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#33879e"></svg:stop><svg:stop offset=".047" stop-color="#537983"></svg:stop><svg:stop offset=".105" stop-color="#726c68"></svg:stop><svg:stop offset=".17" stop-color="#8e6051"></svg:stop><svg:stop offset=".244" stop-color="#a4573f"></svg:stop><svg:stop offset=".33" stop-color="#b55030"></svg:stop><svg:stop offset=".436" stop-color="#c04b26"></svg:stop><svg:stop offset=".585" stop-color="#c74821"></svg:stop><svg:stop offset="1" stop-color="#c9471f"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypeWpml0)" d="M15.09 2c-4.94.013-10.912 5.74-10.845 11.788c-.011 5.97 4.739 11.236 11.868 11.552c4.047.177 5.532-1.865 7.23-1.414s1.874 1.945 1.788 3.085a2.353 2.353 0 0 1-2.5 2.338c-.988-.5-.391-3.2-1.906-3.36c-.946.1-1.368.93-1.159 1.946s1.516 1.988 3.383 2.065a2.89 2.89 0 0 0 2.987-3.006a3.284 3.284 0 0 0-2.809-3.516c-1.913-.178-4.337 2.139-7.957 1.473a10.506 10.506 0 0 1-8.724-10.69c.03-6.9 6.429-10.254 10.452-10.217s6.144 1.4 6.759 3.693s-2.031 4.616-3.223 5.973s-1.822 2.266-1.572 3.851c.251 1.663 2.162 4.1 4.166 4.087s4.919-2.255 4.716-7.7a12 12 0 0 0-4.558-9.353C21.752 3.456 20.032 1.989 15.09 2"></svg:path>`,
})
export class VscodeIconsFileTypeWpmlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
