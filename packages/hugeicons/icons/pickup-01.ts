import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPickup01Icon],svg[hugeicons-pickup-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 17.5c1.424 0 2.062 0 2.514-.487q.03-.032.057-.065c.429-.513.429-1.32.429-2.936c0-1.225 0-1.837-.24-2.354c-.25-.54-.702-.877-1.652-1.565c-.944-.684-1.614-1.452-2.253-2.51c-.912-1.51-1.368-2.265-2.051-2.674c-.684-.409-1.49-.409-3.102-.409h-.7m0 0l1.119 3.48c.548 1.705.822 2.557 1.393 3.039c.571.481 1.309.481 2.784.481H21m-8.997-7v13m-3 0h5.999m6.998-3h-1m-8.997-3H3.005s-.321.004-.6 0c-.461-.007-.4-.02-.4.04v.96s-.02 3.3.017 3.693c0 .259.203.47.563.687c.236.157.606.406.9.524c.36.136 1.52.096 1.52.096"></svg:path><svg:path d="M17.001 19.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-9.997 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class HugeiconsPickup01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
