import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleFillIcon],svg[ph-umbrella-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.76 138.83A16 16 0 0 1 224 144h-88v56a16 16 0 0 0 32 0a8 8 0 0 1 16 0a32 32 0 0 1-64 0v-56H32a16 16 0 0 1-16-17.37a112.44 112.44 0 0 1 188.2-72.88a111.56 111.56 0 0 1 35.8 72.88a16.1 16.1 0 0 1-4.24 12.2"></svg:path>`,
})
export class PhUmbrellaSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
