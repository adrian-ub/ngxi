import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon6FilledIcon],svg[tabler-hexagon-6-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007l.107.076a3.223 3.223 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.226 3.226 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v6l.005.15a2 2 0 0 0 1.838 1.844L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15v-2l-.005-.15a2 2 0 0 0-1.838-1.844L13 11h-2V9h2l.007.117A1 1 0 0 0 15 9a2 2 0 0 0-1.85-1.995zm0 6v2h-2v-2z"></svg:path></svg:g>`,
})
export class TablerHexagon6FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
