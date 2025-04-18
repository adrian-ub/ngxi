import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeRouteIcon],svg[vscode-icons-folder-type-route-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#bf5555" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#40e81c" d="M14.2 18.428a4.2 4.2 0 1 1 4.2-4.2a4.2 4.2 0 0 1-4.2 4.2m0-6a1.8 1.8 0 1 0 1.8 1.8a1.8 1.8 0 0 0-1.8-1.797Z"></svg:path><svg:path fill="#1c91e8" d="M26.8 25.38a4.2 4.2 0 1 1 4.2-4.2a4.2 4.2 0 0 1-4.2 4.2m0-6a1.8 1.8 0 1 0 1.8 1.8a1.8 1.8 0 0 0-1.8-1.797Z"></svg:path><svg:path fill="#eada1b" d="M16.187 31a4.2 4.2 0 1 1 4.2-4.2a4.2 4.2 0 0 1-4.2 4.2m0-6a1.8 1.8 0 1 0 1.8 1.8a1.8 1.8 0 0 0-1.8-1.8"></svg:path><svg:path fill="#474756" d="M14.19 19.094a6 6 0 0 1-.645-.015l.519 3.306a4.9 4.9 0 0 1 2.1-.475a6 6 0 0 1 .668.042l-.517-3.3a4.9 4.9 0 0 1-2.125.442M22 22.158l-2.321 1.22a5 5 0 0 1 1.307 2.475l2.337-1.229A5.07 5.07 0 0 1 22 22.158m1.359-4.458l-4.38-2.422a4.9 4.9 0 0 1-1.355 2.448l4.388 2.432a5.05 5.05 0 0 1 1.347-2.458"></svg:path>`,
})
export class VscodeIconsFolderTypeRouteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
