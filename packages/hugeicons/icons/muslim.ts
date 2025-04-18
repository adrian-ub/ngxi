import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMuslimIcon],svg[hugeicons-muslim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path stroke="currentColor" d="m15.5 9.058l.421-2.155C16.416 4.366 14.523 2 12 2S7.584 4.366 8.079 6.903l.42 2.155C8.834 10.768 10.3 12 12 12c1.702 0 3.167-1.231 3.5-2.942"></svg:path><svg:path fill="currentColor" d="M10.75 11.5a.75.75 0 0 0-1.5 0zm4 0a.75.75 0 0 0-1.5 0zm-2.66 4.498l-.029-.75zm-.18 0l.029-.75zm1.252-.88l.54.52zM9.25 11.5v1.282h1.5V11.5zm4 0v1.282h1.5V11.5zm-1.189 3.749L12 15.25v1.5l.12-.002zm-.18 1.499l.119.002v-1.5l-.061-.001zm1.369-3.966c0 .515-.006.765-.074.994c-.059.2-.185.438-.555.822l1.082 1.04c.468-.487.76-.928.911-1.435c.142-.477.136-.96.136-1.421zm-1.13 3.966c.038-.002.174-.004.332-.06a1.3 1.3 0 0 0 .375-.21c.196-.15.462-.41.876-.84l-1.082-1.04c-.424.442-.616.62-.707.69c-.04.03-.019.006.045-.016c.074-.025.142-.025.102-.023zm-2.87-3.966c0 .46-.006.944.136 1.42c.15.508.443.95.912 1.436l1.08-1.04c-.37-.384-.495-.623-.554-.822c-.068-.229-.074-.479-.074-.994zm2.689 2.467c-.04-.002.028-.002.102.023c.064.022.085.046.045.016c-.091-.07-.283-.248-.707-.69l-1.082 1.04c.414.43.68.69.876.84c.104.08.226.16.375.21c.159.056.294.058.333.06z"></svg:path><svg:path stroke="currentColor" d="M10 14c-3.244.927-4.865 1.39-5.854 2.584a5 5 0 0 0-.271.36C3.117 18.048 3.014 19.458 3 22m11-8c3.244.927 4.865 1.39 5.854 2.584q.144.174.271.36c.759 1.105.861 2.515.875 5.056m-9-6v4M8 6h8"></svg:path></svg:g>`,
})
export class HugeiconsMuslimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
