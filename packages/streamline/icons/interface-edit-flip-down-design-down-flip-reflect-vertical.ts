import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipDownDesignDownFlipReflectVerticalIcon],svg[streamline-interface-edit-flip-down-design-down-flip-reflect-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 11.5v1a1 1 0 0 1-1 1h-1m-3 0h-3m-5-2v1a1 1 0 0 0 1 1h1m-2-9v-3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v3m-13 4V7h13v1.5"></svg:path>`,
})
export class StreamlineInterfaceEditFlipDownDesignDownFlipReflectVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
