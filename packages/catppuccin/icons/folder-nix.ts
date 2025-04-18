import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderNixIcon],svg[catppuccin-folder-nix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#7dc4e4" d="M8 11.557h1.634m.648-.933L8.724 13.19"></svg:path><svg:path stroke="#8aadf4" d="m9.634 8.757l.7 1.167m1.633.233h-3.01"></svg:path><svg:path stroke="#7dc4e4" d="m13.367 8.757l-.7 1.4m.471 1.213l-1.404-2.613"></svg:path><svg:path stroke="#8aadf4" d="m15 12.033l-1.633-.01m-.644.934L14.3 10.39"></svg:path><svg:path stroke="#7dc4e4" d="m13.6 14.824l-1.166-1.4m-1.386.009l3.024-.01"></svg:path><svg:path stroke="#8aadf4" d="m9.634 14.824l.7-1.4m-.453-1.167l1.386 2.567"></svg:path></svg:g>`,
})
export class CatppuccinFolderNixIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
