import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRiceBowl02Icon],svg[hugeicons-rice-bowl-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m6 9l.73-1.113c1.845-2.809 2.767-4.213 3.954-4.652a3.8 3.8 0 0 1 2.632 0c1.187.439 2.109 1.843 3.953 4.652L18 9m.726 11.305C17.623 21 15.749 21 12 21s-5.623 0-6.726-.695c-1.303-.821-2.134-2.252-2.255-3.823a9 9 0 0 1-.034-.563c-.003-.15.006-.343.022-.73c.038-.89.257-2.57 1.268-4.189c.84 1.634 3.644 4.16 6.226 6.168m8.225 3.137c1.303-.821 2.134-2.252 2.255-3.823c.021-.275.032-.413.034-.563s-.006-.343-.022-.73c-.038-.89-.257-2.57-1.268-4.189c-1.409 2.075-6.026 6.214-9.224 6.168m8.225 3.137c-3.235-.077-6.015-1.418-8.225-3.137M14.5 11.5h-.009"></svg:path><svg:path d="M11.5 7c.167.333.8 1 2 1M10 11l-.5.5"></svg:path></svg:g>`,
})
export class HugeiconsRiceBowl02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
