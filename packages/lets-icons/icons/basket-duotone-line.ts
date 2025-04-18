import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketDuotoneLineIcon],svg[lets-icons-basket-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.2"><svg:path d="M12 5V3m-2 13l-.5-3m4.5 3l.5-3"></svg:path><svg:path fill="currentColor" fill-opacity=".25" d="M2 9h20c-1.267 0-1.9 0-2.384.3a2 2 0 0 0-.431.36c-.382.422-.495 1.045-.722 2.292l-.866 4.763c-.285 1.57-.428 2.356-.985 2.82c-.556.465-1.354.465-2.95.465h-3.324c-1.596 0-2.394 0-2.95-.465c-.557-.464-.7-1.25-.985-2.82l-.866-4.763c-.227-1.247-.34-1.87-.722-2.292a2 2 0 0 0-.431-.36C3.9 9 3.267 9 2 9Z"></svg:path></svg:g>`,
})
export class LetsIconsBasketDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
