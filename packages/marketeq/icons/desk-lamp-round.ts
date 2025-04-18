import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDeskLampRoundIcon],svg[marketeq-desk-lamp-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 43.75V21.083A8.334 8.334 0 0 1 18.75 13L25 11.417M6.25 43.75h20.833m7.959-30.562l-2.084-4.521a4.17 4.17 0 1 0-7.562 3.52l2.083 4.417"></svg:path><svg:path stroke="#344054" d="M30.917 14.187a8.333 8.333 0 0 1 11.075 4.03l1.76 3.777l-15.105 7.044l-1.76-3.776a8.33 8.33 0 0 1 4.03-11.075"></svg:path></svg:g>`,
})
export class MarketeqDeskLampRoundIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
