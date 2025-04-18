import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSujoodIcon],svg[hugeicons-sujood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 12.51c0-1.483-.889-3.946-4.444-5.924c-4.444-2.473-7.741-1.723-8.888 0c-.987 1.483-1.481 3.462 2.963 8.408H7.499c-.942 0-1.414.001-1.707.293c-.292.293-.292.764-.292 1.706c0 .941 0 1.412.292 1.705c.293.292.765.293 1.707.293H9.5c1.165.078 3.495-.34 3.495-2.631m6.505-3.85c-.5.324-2 1.872-4 1.485l1 2.498c.667.167 2.1 1.3 2.5 2.499h-3.34a2 2 0 0 1-1.736-1.008l-.929-1.625m6.505-3.848h.258a2.742 2.742 0 1 1 0 5.481H18.5m-3.444-7.495c-.846 0-1.863.296-2.754.646c-1.026.403-1.359 1.627-.812 2.584l1.505 2.633"></svg:path><svg:path d="M5.5 15.5c-1 0-2.203-1.5-3.004-1.5c-.827 0-.97.341-.996 2.998C1.49 18.102 1.894 19 3 19"></svg:path></svg:g>`,
})
export class HugeiconsSujoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
