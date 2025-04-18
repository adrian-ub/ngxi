import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderKubernetesOpenIcon],svg[catppuccin-folder-kubernetes-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="m1.875 8l.686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:g stroke="#8aadf4"><svg:circle cx="11.494" cy="11.509" r="2.992"></svg:circle><svg:path d="M11.494 11.51V7.47m0 4.04L9.389 9.83l-1.053-.84m3.158 2.52l1.168 2.425l.584 1.214m-1.752-3.64l2.625.6l1.312.3m-3.937-.9l2.105-1.679l1.052-.84m-3.157 2.52l-2.625.598l-1.313.3m3.938-.899l-1.169 2.426l-.584 1.213"></svg:path></svg:g></svg:g>`,
})
export class CatppuccinFolderKubernetesOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
