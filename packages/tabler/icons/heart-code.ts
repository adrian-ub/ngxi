import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHeartCodeIcon],svg[tabler-heart-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19.5 12.572l-.536.53m-7.91 5.96L4.5 12.573A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M20 21l2-2l-2-2m-3 0l-2 2l2 2"></svg:path>`,
})
export class TablerHeartCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
