import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReminderIcon],svg[hugeicons-reminder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.947 19c-.077 1.022-.271 1.69-.752 2.18c-.806.82-2.102.82-4.695.82s-3.89 0-4.695-.82S2 19.04 2 16.4v-4.8c0-2.64 0-3.96.805-4.78c.49-.498 1.161-.694 2.195-.77M7.492 19h.009"></svg:path><svg:path d="M16.078 2h-2.156C11.02 2 9.57 2 8.71 2.905c-.861.903-.77 2.33-.59 5.183l.126 1.985c.042.656.062.984.136 1.257a2.89 2.89 0 0 0 2.24 2.075c.282.056.615.056 1.282.056c.929 0 .916.767.916 1.526c0 .59 0 .884.192.985s.44-.062.938-.39l2.96-1.944a1 1 0 0 1 .595-.178c1.222 0 1.833 0 2.328-.183c1.716-.637 1.859-2.223 1.958-3.785l.089-1.404c.18-2.853.271-4.28-.59-5.183C20.43 2 18.98 2 16.078 2"></svg:path><svg:path d="M13.834 8.43C11.426 6.714 15 5 15 5s3.576 1.715 1.167 3.43m-2.332 0h2.332m-2.332 0L13.251 11m2.915-2.57l.816 2.57"></svg:path></svg:g>`,
})
export class HugeiconsReminderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
