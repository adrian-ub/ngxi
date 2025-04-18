import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStructureFolderCircleIcon],svg[hugeicons-structure-folder-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0m14 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M19 16c-.157-2.453-1.031-3-3.988-3H8.988c-2.957 0-3.831.547-3.988 3m7-6h.563c1.58 0 2.37 0 2.937-.375c.246-.162.457-.37.62-.613c.38-.56.38-1.34.38-2.9c0-.937 0-1.405-.227-1.742a1.3 1.3 0 0 0-.373-.368c-.34-.224-.815-.224-1.763-.224h-1.495c-.13 0-.194 0-.254-.009a.82.82 0 0 1-.552-.335a2 2 0 0 1-.121-.22c-.236-.466-.452-.935-.975-1.13C10.51 2 10.249 2 9.725 2c-.817 0-1.226 0-1.533.169c-.218.12-.399.299-.52.515c-.172.302-.172.706-.172 1.513v1.359c0 2.095 0 3.142.659 3.793S9.879 10 12 10"></svg:path></svg:g>`,
})
export class HugeiconsStructureFolderCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
