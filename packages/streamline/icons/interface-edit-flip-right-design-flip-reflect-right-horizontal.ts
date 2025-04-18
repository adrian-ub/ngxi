import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipRightDesignFlipReflectRightHorizontalIcon],svg[streamline-interface-edit-flip-right-design-flip-reflect-right-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h1a1 1 0 0 1 1 1v1m0 3v3m-2 5h1a1 1 0 0 0 1-1v-1m-9 2h-3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h3m4 13H7V.5h1.5"></svg:path>`,
})
export class StreamlineInterfaceEditFlipRightDesignFlipReflectRightHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
