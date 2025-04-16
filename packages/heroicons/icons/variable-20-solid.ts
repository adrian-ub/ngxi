import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsVariable20SolidIcon],svg[heroicons-variable-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.212 2.079a.75.75 0 0 1 1.006.336A16.9 16.9 0 0 1 18 10c0 2.724-.641 5.3-1.782 7.585a.75.75 0 1 1-1.342-.67A15.4 15.4 0 0 0 16.5 10c0-2.486-.585-4.834-1.624-6.915a.75.75 0 0 1 .336-1.006m-10.424 0a.75.75 0 0 1 .336 1.006A15.4 15.4 0 0 0 3.5 10c0 2.486.585 4.834 1.624 6.915a.75.75 0 1 1-1.342.67A16.9 16.9 0 0 1 2 10c0-2.724.641-5.3 1.782-7.585a.75.75 0 0 1 1.006-.336m2.285 3.554a1.5 1.5 0 0 1 2.219.677l.856 2.08l1.146-1.77a2.25 2.25 0 0 1 3.137-.65l.235.156a.75.75 0 1 1-.832 1.248l-.235-.156a.75.75 0 0 0-1.045.216l-1.71 2.644l1.251 3.04l.739-.492a.75.75 0 1 1 .832 1.248l-.739.493a1.5 1.5 0 0 1-2.219-.677l-.856-2.08l-1.146 1.77a2.25 2.25 0 0 1-3.137.65l-.235-.156a.75.75 0 0 1 .832-1.248l.235.157a.75.75 0 0 0 1.045-.217l1.71-2.644l-1.251-3.04l-.739.492a.75.75 0 0 1-.832-1.248z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsVariable20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
