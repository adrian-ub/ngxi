import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNecklaceIcon],svg[hugeicons-necklace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m10.542 12l.39-3.124c.091-.728.422-.876 1.11-.876s1.018.148 1.11.876l.39 3.124"></svg:path><svg:path d="M8.284 12.611c1.336-.811 2.501-.484 3.201.036c.287.214.43.32.515.32s.228-.106.515-.32c.7-.52 1.865-.847 3.2-.036c1.753 1.065 2.15 4.578-1.892 7.542c-.77.565-1.155.847-1.823.847s-1.053-.282-1.822-.847c-4.042-2.964-3.646-6.477-1.894-7.542M2.006 3c-.097 1.578.97 5.043 6.047 6.662M21.994 3c.097 1.578-.97 5.043-6.047 6.662"></svg:path></svg:g>`,
})
export class HugeiconsNecklaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
