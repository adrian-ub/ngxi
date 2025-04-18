import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarRotateIcon],svg[iconoir-calendar-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 21H5a2 2 0 0 1-2-2v-9h18m-6-6V2m0 2v2m0-2h-4.5M3 10V6a2 2 0 0 1 2-2h2m0-2v4m14 4V6a2 2 0 0 0-2-2h-.5"></svg:path><svg:path d="M21.667 16.667C21.048 15.097 19.635 14 17.99 14c-1.759 0-3.253 1.255-3.794 3"></svg:path><svg:path d="M19.995 16.772H21.4a.6.6 0 0 0 .6-.6V14.55m-7.666 4.783C14.953 20.903 16.366 22 18.01 22c1.759 0 3.253-1.255 3.794-3"></svg:path><svg:path d="M16.005 19.228H14.6a.6.6 0 0 0-.6.6v1.622"></svg:path></svg:g>`,
})
export class IconoirCalendarRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
