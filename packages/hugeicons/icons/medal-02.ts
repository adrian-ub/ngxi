import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMedal02Icon],svg[hugeicons-medal-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5.113c0-.553 0-.83.043-1.06a2.51 2.51 0 0 1 1.996-2.01C5.267 2 5.542 2 6.09 2h11.82c.548 0 .823 0 1.051.043a2.51 2.51 0 0 1 1.996 2.01c.043.23.043.507.043 1.06c0 .542 0 .813-.032 1.065a4.04 4.04 0 0 1-1.603 2.744c-.202.15-.438.282-.908.545l-2.572 1.439C13.986 11.969 13.037 12.5 12 12.5s-1.986-.531-3.885-1.594l-2.572-1.44c-.47-.262-.705-.394-.908-.544a4.04 4.04 0 0 1-1.603-2.744C3 5.926 3 5.655 3 5.113M8 5v1m4-1v3m4-3v1m-3.223 7.65l.792 1.597a.98.98 0 0 0 .64.476l1.435.24c.917.155 1.133.826.472 1.489L15 18.577a.99.99 0 0 0-.234.82l.32 1.394c.252 1.102-.329 1.529-1.296.952l-1.345-.803c-.244-.145-.644-.145-.891 0l-1.346.803c-.963.577-1.548.146-1.296-.952l.32-1.393a.99.99 0 0 0-.234-.821l-1.116-1.125c-.657-.663-.445-1.334.472-1.488l1.436-.24a.98.98 0 0 0 .634-.477l.792-1.597c.432-.867 1.134-.867 1.561 0" color="currentColor"></svg:path>`,
})
export class HugeiconsMedal02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
