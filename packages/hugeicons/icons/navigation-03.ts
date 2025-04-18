import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNavigation03Icon],svg[hugeicons-navigation-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.922 4.79c4.774-1.628 7.161-2.441 8.445-1.157s.47 3.67-1.157 8.445l-1.108 3.251c-1.25 3.667-1.875 5.5-2.906 5.652c-.277.04-.563.016-.837-.072c-1.02-.327-1.558-2.26-2.636-6.126c-.239-.857-.358-1.286-.63-1.614a2 2 0 0 0-.262-.261c-.328-.273-.756-.392-1.614-.631c-3.866-1.078-5.799-1.616-6.126-2.636a1.86 1.86 0 0 1-.072-.837c.152-1.03 1.985-1.656 5.652-2.906z" color="currentColor"></svg:path>`,
})
export class HugeiconsNavigation03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
