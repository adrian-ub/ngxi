import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEditUser02Icon],svg[hugeicons-edit-user-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m5.622-2.434c.224-.243.335-.364.454-.434a.93.93 0 0 1 .931-.014c.12.067.236.184.466.42c.23.235.346.353.412.476a.99.99 0 0 1-.014.951c-.07.122-.188.236-.425.464l-2.82 2.717c-.45.433-.675.65-.956.76s-.589.1-1.206.085l-.084-.003c-.188-.005-.282-.007-.337-.069c-.054-.062-.047-.158-.032-.35l.008-.103c.042-.539.063-.808.168-1.05c.105-.243.287-.44.65-.833z" color="currentColor"></svg:path>`,
})
export class HugeiconsEditUser02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
