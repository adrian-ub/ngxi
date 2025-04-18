import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeStatsBars2Icon],svg[icomoon-free-stats-bars2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6h-3c-.275 0-.5.225-.5.5v9c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-9c0-.275-.225-.5-.5-.5m0 9h-3v-4h3zm5-11h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5m0 11h-3v-5h3zm5-13h-3c-.275 0-.5.225-.5.5v13c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-13c0-.275-.225-.5-.5-.5m0 13h-3V9h3z"></svg:path>`,
})
export class IcomoonFreeStatsBars2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
