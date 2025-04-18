import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeTable2Icon],svg[icomoon-free-table2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v14h16V1zm6 9V7h4v3zm4 1v3H6v-3zm0-8v3H6V3zM5 3v3H1V3zM1 7h4v3H1zm10 0h4v3h-4zm0-1V3h4v3zM1 11h4v3H1zm10 3v-3h4v3z"></svg:path>`,
})
export class IcomoonFreeTable2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
