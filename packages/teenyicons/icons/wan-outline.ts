import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsWanOutlineIcon],svg[teenyicons-wan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5 14.5l-.489.105a.5.5 0 0 0 .967.042zm4-13l.478-.147a.5.5 0 0 0-.956 0zm4 13l-.478.147a.5.5 0 0 0 .967-.042zM.011.605l3 14l.978-.21l-3-14zm3.967 14.042l4-13l-.956-.294l-4 13zm3.044-13l4 13l.956-.294l-4-13zm4.967 12.958l3-14l-.978-.21l-3 14zM0 6h15V5H0zm0 4h15V9H0z"></svg:path>`,
})
export class TeenyiconsWanOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
