import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVkIcon],svg[hugeicons-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10.749V7.053c0-.833-.151-1-.98-1L10.67 6c-.732 0-1.098 0-1.246.237s.016.562.343 1.21c.182.36.28.621.28 1.025v2.66c0 .84 0 1.261-.32 1.386c-.32.124-.585-.158-1.117-.722c-1.3-1.384-1.978-3.112-2.423-4.996c-.092-.39-.138-.585-.276-.693S5.576 6 5.184 6h-2.2c-.482 0-.723 0-.874.17c-.15.171-.121.389-.063.824c.528 3.927 3.981 10.366 10.36 10.98c1.13.108 1.593-.197 1.593-1.435c0-.702-.015-1.836.868-1.985c.463-.078.774.087 1.291.52c.896.752 1.366 1.67 1.693 2.367c.217.462.378.559.888.559h2.074c1.048 0 1.333-.256.866-1.24a9 9 0 0 0-2.196-2.893c-.636-.547-.953-.82-.97-1.022c-.019-.201.214-.486.68-1.056c.9-1.102 2.126-2.831 2.698-4.666c.284-.91.017-1.123-.904-1.123h-1.863c-.903 0-.902-.031-1.115.993c-.346 1.661-1.478 3.258-2.542 4.345c-.505.516-.81.827-1.125.7S14 11.524 14 10.748" color="currentColor"></svg:path>`,
})
export class HugeiconsVkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
