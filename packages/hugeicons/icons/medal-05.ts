import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMedal05Icon],svg[hugeicons-medal-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.625 3.482c.313-.719.47-1.078.781-1.28S9.116 2 9.91 2h4.18c.795 0 1.192 0 1.504.202c.311.202.468.561.78 1.28l2.02 4.632c.498 1.142.747 1.714.524 2.203c-.224.489-.824.686-2.023 1.079L12 13l-4.895-1.604c-1.2-.393-1.8-.59-2.023-1.08c-.223-.488.026-1.06.524-2.202zM12 13L8.5 2.5m7 9L12 2"></svg:path><svg:path d="m12.777 13.65l.792 1.597a.98.98 0 0 0 .64.476l1.435.24c.917.155 1.133.826.472 1.489L15 18.577a.99.99 0 0 0-.234.82l.32 1.394c.252 1.102-.329 1.529-1.296.952l-1.345-.803c-.244-.145-.644-.145-.891 0l-1.346.803c-.963.577-1.548.146-1.296-.952l.32-1.393a.99.99 0 0 0-.234-.821l-1.116-1.125c-.657-.663-.445-1.334.472-1.488l1.436-.24a.98.98 0 0 0 .634-.477l.792-1.597c.432-.867 1.134-.867 1.561 0"></svg:path></svg:g>`,
})
export class HugeiconsMedal05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
