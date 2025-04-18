import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHome06Icon],svg[hugeicons-home-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.062 4.826L3.239 9.921c-.5.437-.164 1.213.523 1.213c.42 0 .761.315.761.703v3.244c0 2.79 0 4.185.939 5.052C6.4 21 7.91 21 10.932 21h2.136c3.021 0 4.532 0 5.47-.867c.939-.867.939-2.262.939-5.052v-3.244c0-.388.34-.703.76-.703c.688 0 1.023-.776.524-1.213l-5.823-5.095C13.547 3.61 12.851 3 12 3s-1.547.609-2.938 1.826M12 16h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsHome06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
