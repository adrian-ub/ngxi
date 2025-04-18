import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCalendarFavorite01Icon],svg[hugeicons-calendar-favorite-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m17.777 13.65l.792 1.597a.98.98 0 0 0 .64.476l1.435.24c.918.155 1.134.826.472 1.489L20 18.577a.99.99 0 0 0-.234.82l.32 1.394c.252 1.102-.329 1.529-1.296.952l-1.345-.803c-.244-.145-.644-.145-.891 0l-1.346.803c-.963.577-1.548.146-1.296-.952l.32-1.393a.99.99 0 0 0-.234-.821l-1.116-1.125c-.657-.663-.445-1.334.472-1.488l1.436-.24a.98.98 0 0 0 .634-.477l.792-1.597c.432-.867 1.134-.867 1.561 0M18 2v2M6 2v2"></svg:path><svg:path d="M21.5 11.5c-.004-3.866-.073-5.872-1.252-7.146C18.996 3 16.98 3 12.95 3h-1.9C7.02 3 5.004 3 3.752 4.354C2.5 5.707 2.5 7.886 2.5 12.244v.513c0 4.357 0 6.536 1.252 7.89c1.194 1.29 3.081 1.35 6.748 1.353M3 8h18"></svg:path></svg:g>`,
})
export class HugeiconsCalendarFavorite01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
