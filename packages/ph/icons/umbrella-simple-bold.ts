import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleBoldIcon],svg[ph-umbrella-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.93 126.3A116.43 116.43 0 0 0 49 50.81a115.45 115.45 0 0 0-37 75.49A20 20 0 0 0 32 148h84v52a36 36 0 0 0 72 0a12 12 0 0 0-24 0a12 12 0 0 1-24 0v-52h84a20 20 0 0 0 20-21.7ZM36.44 124a92.45 92.45 0 0 1 154.25-55.54A91.56 91.56 0 0 1 219.56 124Z"></svg:path>`,
})
export class PhUmbrellaSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
