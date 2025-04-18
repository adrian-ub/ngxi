import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMugHotSolidIcon],svg[flowbite-mug-hot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 3a1 1 0 1 0-2 0c0 .358-.099.51-.198.616c-.149.158-.368.286-.773.502l-.045.024c-.345.183-.848.451-1.245.874C6.276 5.51 6 6.158 6 7a1 1 0 0 0 2 0c0-.358.099-.51.198-.616c.149-.158.368-.286.773-.502l.045-.024c.345-.183.848-.451 1.245-.874C10.724 4.49 11 3.842 11 3m5 0a1 1 0 1 0-2 0c0 .358-.099.51-.198.616c-.149.158-.368.286-.773.502l-.045.024c-.345.183-.848.451-1.245.874C11.276 5.51 11 6.158 11 7a1 1 0 1 0 2 0c0-.358.099-.51.198-.616c.149-.158.368-.286.773-.502l.045-.024c.345-.183.848-.451 1.245-.874C15.724 4.49 16 3.842 16 3"></svg:path><svg:path fill-rule="evenodd" d="M5 10a1 1 0 0 0-.995 1.1l.64 6.398A5 5 0 0 0 9.62 22h.76a5 5 0 0 0 4.9-4H17a3 3 0 1 0 0-6h-1.095l.09-.9A1 1 0 0 0 15 10zm12 6h-1.495l.2-2H17a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlowbiteMugHotSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
