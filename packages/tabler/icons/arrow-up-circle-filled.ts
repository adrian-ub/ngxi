import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowUpCircleFilledIcon],svg[tabler-arrow-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.852 2.011l.058-.007L12 2l.075.003l.126.017l.111.03l.111.044l.098.052l.104.074l.082.073l3 3a1 1 0 1 1-1.414 1.414L13 5.415v10.756a3.001 3.001 0 1 1-2 0V5.415L9.707 6.707a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414l3-3q.053-.054.112-.097l.11-.071l.114-.054l.105-.035z"></svg:path>`,
})
export class TablerArrowUpCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
