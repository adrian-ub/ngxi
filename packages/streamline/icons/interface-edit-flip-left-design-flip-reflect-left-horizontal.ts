import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipLeftDesignFlipReflectLeftHorizontalIcon],svg[streamline-interface-edit-flip-left-design-flip-reflect-left-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h-1a1 1 0 0 0-1 1v1m0 3v3m2 5h-1a1 1 0 0 1-1-1v-1m9 2h3a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-3m-4 13H7V.5H5.5"></svg:path>`,
})
export class StreamlineInterfaceEditFlipLeftDesignFlipReflectLeftHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
