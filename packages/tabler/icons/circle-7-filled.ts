import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircle7FilledIcon],svg[tabler-circle-7-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m2 5h-4l-.117.007a1 1 0 0 0-.876.876L9 8l.007.117a1 1 0 0 0 .876.876L10 9h2.718l-1.688 6.757l-.022.115a1 1 0 0 0 1.927.482l.035-.111l2-8l.021-.112a1 1 0 0 0-.878-1.125z"></svg:path></svg:g>`,
})
export class TablerCircle7FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
