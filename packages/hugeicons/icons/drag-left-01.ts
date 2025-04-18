import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragLeft01Icon],svg[hugeicons-drag-left-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.682 8.489a3.495 3.495 0 1 1 3.602 0"></svg:path><svg:path d="m10.553 21.935l.025-.63a2.93 2.93 0 0 0-.48-1.745C8.75 17.533 7.72 16.378 6.309 14.4a1.5 1.5 0 0 1-.261-.51c-.341-1.444 1.419-3.325 3.049-1.159l1.591 1.632v-8.04c.211-1.648 2.804-1.975 3.241 0v3.742c1.617-.148 8.154.978 6.92 5.465c-.058.21-.113.425-.17.635c-.208.767-.716 1.886-1.205 2.84c-.544 1.061-.401 2.56-.493 2.995M8.719 4.989h-5.72m-.001 0c.14.435.518.7.841.996L5.027 6.99m-2.029-2c.113-.443.526-.73.841-1.029l1.188-1.018"></svg:path></svg:g>`,
})
export class HugeiconsDragLeft01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
