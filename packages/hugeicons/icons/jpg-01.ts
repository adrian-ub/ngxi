import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJpg01Icon],svg[hugeicons-jpg-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.803c0-2.968 0-4.451.469-5.636c.754-1.905 2.348-3.408 4.37-4.119C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.265 2.497 2.353c.268.677.268 1.525.268 3.22v5.175"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.117 2.098-.057a1.67 1.67 0 0 0 1.179-1.178c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2M6.856 16v3.815c0 .744-.083 1.539-.729 1.915a2 2 0 0 1-.98.268a1.38 1.38 0 0 1-1.098-.496c-.38-.454-.51-.867-.549-1.525m6.744 1.988V16h1.987c.732 0 1.384.526 1.41 1.253q.008.237 0 .468c-.027.732-.682 1.262-1.418 1.262H11m9.5-1.989c-.04-.809-.502-1.013-2-.994h-1c-.552 0-1 .445-1 .994v3.977c0 .55.448.994 1 .994H20c.276 0 .5-.222.5-.497v-1.491a.5.5 0 0 0-.5-.497h-1"></svg:path></svg:g>`,
})
export class HugeiconsJpg01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
