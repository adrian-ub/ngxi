import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPieChart02Icon],svg[hugeicons-pie-chart-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.032 10.744h2.05c1.57 0 2.62 0 3.29-1c.67-.99.34-1.83-.12-3a8.88 8.88 0 0 0-5-5l-.032-.012c-1.105-.434-1.987-.781-2.978-.108c-1 .67-1 1.72-1 3.3v2.03c0 1.59 0 2.47.66 3.12c.67.67 1.54.67 3.13.67m-1.95-7.88a.55.55 0 0 1 .35-.12c.23 0 .57.12 1.26.4a7.37 7.37 0 0 1 4.16 4.16c.44 1.12.48 1.3.27 1.6c-.21.31-.6.34-2.06.34h-2.03c-1.15 0-1.84 0-2.07-.23c-.22-.22-.22-.95-.22-2.06v-2.03c0-1.46.04-1.85.34-2.06m-13.84 10.11c0 5.39 4.38 9.77 9.77 9.77l.01.01c4.53 0 8.54-3.2 9.54-7.62l.006-.026c.197-.906.34-1.56-.186-2.223c-.52-.65-1.25-.65-2.34-.65h-6.27v-6.27c0-1.1 0-1.82-.66-2.36c-.644-.516-1.308-.373-2.225-.176l-.025.006c-4.49 1.01-7.62 4.94-7.62 9.54m8.146-8.117c.317-.066.542-.112.674-.112c.05 0 .08.01.1.02c.1.08.1.6.1 1.19v15.26c-4.21-.38-7.52-3.93-7.52-8.24c0-3.84 2.71-7.23 6.51-8.09zm2.374 16.358v-7.48h6.27c.51 0 1.1 0 1.17.08c.07.09.02.36-.12.99c-.78 3.49-3.8 6.08-7.32 6.41" color="currentColor"></svg:path>`,
})
export class HugeiconsPieChart02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
