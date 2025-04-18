import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSwipeUpFilledIcon],svg[tabler-swipe-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.852 3.011l.058-.007L12 3l.075.003l.126.017l.111.03l.111.044l.098.052l.104.074l.082.073l3 3a1 1 0 1 1-1.414 1.414L13 6.415l.001 4.685A5.002 5.002 0 0 1 12 21a5 5 0 0 1-5-5l.005-.217A5 5 0 0 1 11 11.1V6.415L9.707 7.707a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414l3-3q.053-.054.112-.097l.11-.071l.114-.054l.105-.035z"></svg:path>`,
})
export class TablerSwipeUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
