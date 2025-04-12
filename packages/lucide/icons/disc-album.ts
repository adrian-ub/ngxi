import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDiscAlbumIcon],svg[lucide-disc-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:circle cx="12" cy="12" r="5"></svg:circle><svg:path d="M12 12h.01"></svg:path></svg:g>`
})
export class LucideDiscAlbumIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
