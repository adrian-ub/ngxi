import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOnlineLearning04Icon],svg[hugeicons-online-learning-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.998 14.969v1.406c0 2.652 0 3.977-.879 4.801c-.878.824-2.293.824-5.121.824s-4.243 0-5.121-.824c-.879-.823-.879-2.15-.879-4.8v-4.822c0-2.652 0-3.978.879-4.802c.582-.545 1.348-.696 2.121-.737m3 12.985h.009"></svg:path><svg:path d="M14.998 3.5c-2.107-1.182-3.375-1.41-5-1.5c-.647.117-.851.351-1 1v6c-.005.914.198 1.256 1 1.5c2.177.348 3.22.663 4.877 1.442c.078.037.17.038.249.004c1.599-.686 2.632-1.07 3.818-1.293c.697-.13 1.563-.14 1.908-.758c.122-.217.163-.498.148-.895V3c-.204-.644-.423-.861-1-1c-1.756.097-2.818.345-5 1.5m0 0v8"></svg:path></svg:g>`,
})
export class HugeiconsOnlineLearning04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
