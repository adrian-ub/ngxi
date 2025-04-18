import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSent02Icon],svg[hugeicons-sent-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.628 18.165l-.017-.006l-.015.02l-.84 1.201l-.073.097c-1.474 1.949-2.293 3.033-3.297 3.033l.01-.01c-.13 0-.26-.02-.39-.05c-1.27-.34-1.27-1.72-1.27-4.47v-1.85l-.58-.2c-4.21-1.46-6.3-2.19-6.41-4c-.1-1.825 1.91-2.775 5.91-4.666l.03-.014l7.32-3.46c3.3-1.57 4.96-2.35 6.3-1.36s1.04 2.78.44 6.34l-.96 5.7l-.007.038c-.396 2.296-.61 3.536-1.703 4.172c-.38.22-.76.32-1.2.32l-.01-.01c-.83 0-1.832-.343-3.238-.825m-4.392-1.517v1.332c0 1.38 0 2.8.21 3.06c.26-.1 1.2-1.34 2.1-2.54l.597-.848zM8.316 8.6c-3.09 1.46-5.12 2.42-5.08 3.24c.05.81 2.17 1.55 5.38 2.66l.409.141l7.43-7.431c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.914 6.915l4.415 1.525c1.94.67 2.81.95 3.29.67c.47-.28.64-1.16.98-3.13l.96-5.71l.012-.072c.443-2.67.732-4.412.138-4.848c-.606-.447-2.149.28-4.706 1.485l-.054.025l-7.32 3.46z" color="currentColor"></svg:path>`,
})
export class HugeiconsSent02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
