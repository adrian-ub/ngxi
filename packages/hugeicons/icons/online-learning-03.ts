import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOnlineLearning03Icon],svg[hugeicons-online-learning-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 18.99c-.078 1.026-.273 1.696-.757 2.187c-.809.823-2.111.823-4.717.823s-3.907 0-4.717-.823C2 20.355 2 19.031 2 16.383v-4.815c0-2.648 0-3.972.81-4.795c.491-.5 1.166-.696 2.204-.773m2.478 13h.009"></svg:path><svg:path d="M16.078 2h-2.156C11.02 2 9.57 2 8.71 2.903c-.861.904-.77 2.33-.59 5.184l.126 1.985c.042.655.062.983.136 1.257a2.89 2.89 0 0 0 2.24 2.074c.282.056.615.056 1.282.056c.929 0 .916.767.916 1.526c0 .59 0 .884.192.985s.44-.062.938-.389l2.96-1.944a1 1 0 0 1 .595-.178c1.222 0 1.833 0 2.328-.184c1.716-.637 1.859-2.222 1.958-3.785l.089-1.403c.18-2.854.271-4.28-.59-5.184C20.43 2 18.98 2 16.078 2"></svg:path><svg:path d="m17.57 10.5l-.625-1.25M12.57 10.5l.625-1.25m0 0L15 5.5l1.946 3.75m-3.75 0h3.75"></svg:path></svg:g>`,
})
export class HugeiconsOnlineLearning03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
