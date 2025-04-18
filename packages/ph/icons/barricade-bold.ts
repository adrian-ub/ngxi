import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBarricadeBoldIcon],svg[ph-barricade-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 60H32a20 20 0 0 0-20 20v72a20 20 0 0 0 20 20h20v28a12 12 0 0 0 24 0v-28h104v28a12 12 0 0 0 24 0v-28h20a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-4 59l-35-35h35Zm-43 29l-64-64h38l64 64Zm-72 0L41 84h38l64 64Zm-69-35l35 35H36Z"></svg:path>`,
})
export class PhBarricadeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
