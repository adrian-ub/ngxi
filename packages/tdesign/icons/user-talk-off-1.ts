import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserTalkOff1Icon],svg[tdesign-user-talk-off-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1.586L22.414 21L21 22.414l-4.039-4.038Q17 18.683 17 19v2h-2v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2H0v-2a5 5 0 0 1 5-5h7q.317 0 .624.039l-2.359-2.36a5 5 0 0 1-6.444-6.444L1.586 3zm2.501 5.33L5.5 7a3 3 0 0 0 3.085 3zM8.5 4q-.182 0-.356.02l-.993.118l-.234-1.987l.993-.116Q8.2 2 8.5 2a5 5 0 0 1 4.965 5.59l-.117.993l-1.986-.234l.117-.993q.02-.175.02-.356a3 3 0 0 0-3-3m12.075 1.648l.498.867a7 7 0 0 1-.002 6.975l-.499.867l-1.734-.997l.499-.867a5 5 0 0 0 .002-4.982l-.498-.867zM17.54 7.391l.498.867a3.5 3.5 0 0 1-.001 3.487l-.499.867l-1.733-.997l.498-.867a1.5 1.5 0 0 0 0-1.494l-.497-.868z"></svg:path>`,
})
export class TdesignUserTalkOff1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
