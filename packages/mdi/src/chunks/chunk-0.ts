import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAbTestingIcon],svg[mdi-ab-testing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v8h2V8h2v4h2V4a2 2 0 0 0-2-2zm0 2h2v2H4m18 9.5V14a2 2 0 0 0-2-2h-4v10h4a2 2 0 0 0 2-2v-1.5a1.54 1.54 0 0 0-1.5-1.5a1.54 1.54 0 0 0 1.5-1.5M20 20h-2v-2h2zm0-4h-2v-2h2M5.79 21.61l-1.58-1.22l14-18l1.58 1.22Z"></svg:path>`,
})
export class MdiAbTestingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAbjadHebrewIcon],svg[mdi-abjad-hebrew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.9 4L9 10.03a3.44 3.44 0 0 0-3 2.56L4 20h2.07l1.85-6.89c.17-.65.77-1.11 1.44-1.11h1.33l6.78 8h2.63L15 13.97a3.44 3.44 0 0 0 3-2.56L20 4h-2.07l-1.85 6.89c-.17.65-.77 1.11-1.44 1.11h-1.33L6.53 4Z"></svg:path>`,
})
export class MdiAbjadHebrewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAbacusIcon],svg[mdi-abacus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h2v6H5zm5 0H8v6h2zM5 19h2v-6H5zm5-6H8v6h2v-2h5v-2h-5zm-8 8h2V3H2zM20 3v4h-7V5h-2v6h2V9h7v6h-2v-2h-2v6h2v-2h2v4h2V3z"></svg:path>`,
})
export class MdiAbacusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAbjadArabicIcon],svg[mdi-abjad-arabic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-1.92 0-3.5 1.58-3.5 3.5c0 .93.38 1.78 1 2.41c-1.53 1-2.5 2.71-2.5 4.59c0 3.03 2.47 5.5 5.5 5.5c1.76 0 3.5-.46 5-1.34l-1-1.73c-1.22.7-2.6 1.07-4 1.07c-1.94 0-3.5-1.55-3.5-3.5a3.49 3.49 0 0 1 2.59-3.38l5.21-1.4l-.52-1.93L11.83 9c-.75-.1-1.33-.72-1.33-1.5c0-.84.66-1.5 1.5-1.5c.26 0 .5.07.75.2l1-1.73C13.22 4.16 12.61 4 12 4"></svg:path>`,
})
export class MdiAbjadArabicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAbugidaThaiIcon],svg[mdi-abugida-thai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20c0-2.56 1.87-7.58 4.86-12.75C14.29 6.5 15.08 6 16 6c1.12 0 2 .88 2 2v12h2V8c0-2.2-1.8-4-4-4c-1.66 0-3.1.92-3.87 2.25c-1.57 2.71-2.52 4.9-3.13 6.78V6.5C9 5.13 7.87 4 6.5 4S4 5.13 4 6.5S5.13 9 6.5 9c.17 0 .34 0 .5-.05V20M6.5 6c.29 0 .5.21.5.5s-.21.5-.5.5s-.5-.21-.5-.5s.21-.5.5-.5"></svg:path>`,
})
export class MdiAbugidaThaiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAbugidaDevanagariIcon],svg[mdi-abugida-devanagari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3v2h3c1.32 0 2.41.83 2.82 2H6v2h8v1h-2c-2.75 0-5 2.25-5 5s2.25 5 5 5c.77 0 1.45-.27 2-.7V21h2v-4h-2c-.45.62-1.17 1-2 1c-1.67 0-3-1.33-3-3s1.33-3 3-3h4V9h2V7h-2.1c-.47-2.28-2.49-4-4.9-4z"></svg:path>`,
})
export class MdiAbugidaDevanagariIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccessPointIcon],svg[mdi-access-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.93 4.93A9.97 9.97 0 0 0 2 12c0 2.76 1.12 5.26 2.93 7.07l1.41-1.41A7.94 7.94 0 0 1 4 12c0-2.21.89-4.22 2.34-5.66zm14.14 0l-1.41 1.41A7.96 7.96 0 0 1 20 12c0 2.22-.89 4.22-2.34 5.66l1.41 1.41A9.97 9.97 0 0 0 22 12c0-2.76-1.12-5.26-2.93-7.07M7.76 7.76A5.98 5.98 0 0 0 6 12c0 1.65.67 3.15 1.76 4.24l1.41-1.41A4 4 0 0 1 8 12c0-1.11.45-2.11 1.17-2.83zm8.48 0l-1.41 1.41A4 4 0 0 1 16 12c0 1.11-.45 2.11-1.17 2.83l1.41 1.41A5.98 5.98 0 0 0 18 12c0-1.65-.67-3.15-1.76-4.24M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiAccessPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccessPointCheckIcon],svg[mdi-access-point-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.59 14.84l1.16 1.41L17 21l-2.75-3l1.16-1.16L17 18.43zm-1.52-9.91l-1.41 1.41A7.96 7.96 0 0 1 20 12v.34c.68.25 1.33.62 1.88 1.09c.07-.47.12-.93.12-1.43c0-2.76-1.12-5.26-2.93-7.07m-3.11 7.43c.64-.23 1.32-.36 2.04-.36c0-1.65-.67-3.15-1.76-4.24l-1.41 1.41A4 4 0 0 1 16 12c0 .12-.03.24-.04.36M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M6.34 6.34L4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07l1.41-1.41A7.94 7.94 0 0 1 4 12c0-2.21.89-4.22 2.34-5.66m1.42 1.42C6.67 8.85 6 10.35 6 12s.67 3.15 1.76 4.24l1.41-1.41C8.45 14.11 8 13.11 8 12s.45-2.11 1.17-2.83z"></svg:path>`,
})
export class MdiAccessPointCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccessPointMinusIcon],svg[mdi-access-point-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12c0-1.11-.45-2.11-1.17-2.83l1.41-1.41A5.98 5.98 0 0 1 18 12c-.72 0-1.4.13-2.04.36c.01-.12.04-.24.04-.36m4 .34c.68.25 1.33.62 1.88 1.09c.07-.47.12-.93.12-1.43c0-2.76-1.12-5.26-2.93-7.07l-1.41 1.41A7.96 7.96 0 0 1 20 12zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M7.76 7.76C6.67 8.85 6 10.35 6 12s.67 3.15 1.76 4.24l1.41-1.41C8.45 14.11 8 13.11 8 12s.45-2.11 1.17-2.83zM6.34 6.34L4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07l1.41-1.41A7.94 7.94 0 0 1 4 12c0-2.21.89-4.22 2.34-5.66M14 19h8v-2h-8z"></svg:path>`,
})
export class MdiAccessPointMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccessPointNetworkIcon],svg[mdi-access-point-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.93 3.93A9.97 9.97 0 0 0 2 11c0 2.76 1.12 5.26 2.93 7.07l1.41-1.41A7.94 7.94 0 0 1 4 11c0-2.21.89-4.22 2.34-5.66zm14.14 0l-1.41 1.41A7.96 7.96 0 0 1 20 11c0 2.22-.89 4.22-2.34 5.66l1.41 1.41A9.97 9.97 0 0 0 22 11c0-2.76-1.12-5.26-2.93-7.07M7.76 6.76A5.98 5.98 0 0 0 6 11c0 1.65.67 3.15 1.76 4.24l1.41-1.41A4 4 0 0 1 8 11c0-1.11.45-2.11 1.17-2.83zm8.48 0l-1.41 1.41A4 4 0 0 1 16 11c0 1.11-.45 2.11-1.17 2.83l1.41 1.41A5.98 5.98 0 0 0 18 11c0-1.65-.67-3.15-1.76-4.24M12 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-1 6v4h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2h-7a1 1 0 0 0-1-1h-1v-4z"></svg:path>`,
})
export class MdiAccessPointNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccessPointOffIcon],svg[mdi-access-point-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L12.1 14H12a2 2 0 0 1-2-2v-.1l-1.6-1.61c-.25.52-.4 1.09-.4 1.71c0 1.11.45 2.11 1.17 2.83l-1.41 1.41A5.98 5.98 0 0 1 6 12c0-1.17.34-2.26.93-3.18L5.5 7.37C4.55 8.67 4 10.27 4 12c0 2.22.89 4.22 2.34 5.66l-1.41 1.41A9.97 9.97 0 0 1 2 12c0-2.28.77-4.37 2.06-6.05L1.11 3l1.28-1.27l19.72 19.73zm-4.91-10l1.6 1.6c.3-.72.47-1.5.47-2.33c0-1.65-.67-3.15-1.76-4.24l-1.41 1.41a3.99 3.99 0 0 1 1.1 3.56m3.1 3.1l1.47 1.45c.94-1.53 1.5-3.34 1.5-5.28c0-2.76-1.12-5.26-2.93-7.07l-1.41 1.41A7.96 7.96 0 0 1 20 12c0 1.39-.35 2.7-.97 3.83"></svg:path>`,
})
export class MdiAccessPointOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccessPointNetworkOffIcon],svg[mdi-access-point-network-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.83 13.83A4 4 0 0 0 16 11c0-1.11-.45-2.11-1.17-2.83l1.41-1.41A5.98 5.98 0 0 1 18 11c0 1.65-.67 3.15-1.76 4.24zM14 11a2 2 0 0 0-2-2c-.6 0-1.13.27-1.5.68l2.82 2.82c.41-.37.68-.9.68-1.5m3.66 5.66l1.41 1.41A9.97 9.97 0 0 0 22 11c0-2.76-1.12-5.26-2.93-7.07l-1.41 1.41A7.96 7.96 0 0 1 20 11c0 2.22-.89 4.22-2.34 5.66M22 21.18V20h-1.18zm-1.73.82l.73.73L19.73 24l-2-2H15a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-3.73l-2.66-2.66c.2.46.48.89.83 1.22l-1.41 1.41A5.98 5.98 0 0 1 6 11c0-.23 0-.46.04-.69L4.37 8.64C4.14 9.39 4 10.18 4 11c0 2.22.89 4.22 2.34 5.66l-1.41 1.41A9.97 9.97 0 0 1 2.81 7.08L1 5.27L2.28 4L3.7 5.42l1.45 1.45l1.48 1.48L8.17 9.9l2.11 2.1l.72.71L18.27 20h.01l2 2zm-4.54-2L13 17.27V19h1a1 1 0 0 1 1 1z"></svg:path>`,
})
export class MdiAccessPointNetworkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccessPointPlusIcon],svg[mdi-access-point-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12c0-1.11-.45-2.11-1.17-2.83l1.41-1.41A5.98 5.98 0 0 1 18 12c-.72 0-1.4.13-2.04.36c.01-.12.04-.24.04-.36m4 .34c.68.25 1.33.62 1.88 1.09c.07-.47.12-.93.12-1.43c0-2.76-1.12-5.26-2.93-7.07l-1.41 1.41A7.96 7.96 0 0 1 20 12zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M6.34 6.34L4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07l1.41-1.41A7.94 7.94 0 0 1 4 12c0-2.21.89-4.22 2.34-5.66m1.42 1.42C6.67 8.85 6 10.35 6 12s.67 3.15 1.76 4.24l1.41-1.41C8.45 14.11 8 13.11 8 12s.45-2.11 1.17-2.83zM19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class MdiAccessPointPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountIcon],svg[mdi-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></svg:path>`,
})
export class MdiAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccessPointRemoveIcon],svg[mdi-access-point-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12c0-1.11-.45-2.11-1.17-2.83l1.41-1.41A5.98 5.98 0 0 1 18 12c-.72 0-1.4.13-2.04.36c.01-.12.04-.24.04-.36M6.34 6.34L4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07l1.41-1.41A7.94 7.94 0 0 1 4 12c0-2.21.89-4.22 2.34-5.66m12.73-1.41l-1.41 1.41A7.96 7.96 0 0 1 20 12v.34c.68.25 1.33.62 1.88 1.09c.07-.47.12-.93.12-1.43c0-2.76-1.12-5.26-2.93-7.07M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M7.76 7.76C6.67 8.85 6 10.35 6 12s.67 3.15 1.76 4.24l1.41-1.41C8.45 14.11 8 13.11 8 12s.45-2.11 1.17-2.83zm12.36 6.7L18 16.59l-2.12-2.12l-1.41 1.41L16.59 18l-2.12 2.12l1.41 1.41L18 19.41l2.12 2.12l1.41-1.41L19.41 18l2.12-2.12z"></svg:path>`,
})
export class MdiAccessPointRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountAlertOutlineIcon],svg[mdi-account-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12V7h2v6h-2m0 4h2v-2h-2m-10-2c2.67 0 8 1.34 8 4v3H2v-3c0-2.66 5.33-4 8-4m0-9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1m0-9A2.1 2.1 0 0 0 7.9 8a2.1 2.1 0 0 0 2.1 2.1A2.1 2.1 0 0 0 12.1 8A2.1 2.1 0 0 0 10 5.9"></svg:path>`,
})
export class MdiAccountAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountAlertIcon],svg[mdi-account-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H2v-2c0-2.21 3.58-4 8-4m10-2V7h2v6h-2m0 4v-2h2v2z"></svg:path>`,
})
export class MdiAccountAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountArrowDownIcon],svg[mdi-account-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18v-4h-2v4h-2l3 3l3-3zM11 4C8.8 4 7 5.8 7 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 10c-4.4 0-8 1.8-8 4v2h9.5c-.3-.8-.5-1.6-.5-2.5c0-1.2.3-2.3.9-3.4c-.6 0-1.2-.1-1.9-.1"></svg:path>`,
})
export class MdiAccountArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountArrowLeftIcon],svg[mdi-account-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18h4v-2h-4v-2l-3 3l3 3zM11 4C8.8 4 7 5.8 7 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 10c-4.4 0-8 1.8-8 4v2h9.5c-.3-.8-.5-1.6-.5-2.5c0-1.2.3-2.3.9-3.4c-.6 0-1.2-.1-1.9-.1"></svg:path>`,
})
export class MdiAccountArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountArrowLeftOutlineIcon],svg[mdi-account-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18h4v-2h-4v-2l-3 3l3 3zM11 4C8.8 4 7 5.8 7 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 7c-2.7 0-8 1.3-8 4v3h9.5c-.3-.6-.4-1.2-.5-1.9H4.9V17c0-.6 3.1-2.1 6.1-2.1c.5 0 1 .1 1.5.1c.3-.6.6-1.2 1.1-1.7c-1-.2-1.9-.3-2.6-.3"></svg:path>`,
})
export class MdiAccountArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountArrowRightIcon],svg[mdi-account-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16h-4v2h4v2l3-3l-3-3zM11 4C8.8 4 7 5.8 7 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 10c-4.4 0-8 1.8-8 4v2h9.5c-.3-.8-.5-1.6-.5-2.5c0-1.2.3-2.3.9-3.4c-.6 0-1.2-.1-1.9-.1"></svg:path>`,
})
export class MdiAccountArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountArrowRightOutlineIcon],svg[mdi-account-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16h-4v2h4v2l3-3l-3-3zM11 4C8.8 4 7 5.8 7 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 7c-2.7 0-8 1.3-8 4v3h9.5c-.3-.6-.4-1.2-.5-1.9H4.9V17c0-.6 3.1-2.1 6.1-2.1c.5 0 1 .1 1.5.1c.3-.6.6-1.2 1.1-1.7c-1-.2-1.9-.3-2.6-.3"></svg:path>`,
})
export class MdiAccountArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountArrowUpIcon],svg[mdi-account-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17v4h2v-4h2l-3-3l-3 3zM11 4C8.8 4 7 5.8 7 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 10c-4.4 0-8 1.8-8 4v2h9.5c-.3-.8-.5-1.6-.5-2.5c0-1.2.3-2.3.9-3.4c-.6 0-1.2-.1-1.9-.1"></svg:path>`,
})
export class MdiAccountArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountArrowUpOutlineIcon],svg[mdi-account-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17v4h2v-4h2l-3-3l-3 3zM11 4C8.8 4 7 5.8 7 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 7c-2.7 0-8 1.3-8 4v3h9.5c-.3-.6-.4-1.2-.5-1.9H4.9V17c0-.6 3.1-2.1 6.1-2.1c.5 0 1 .1 1.5.1c.3-.6.6-1.2 1.1-1.7c-1-.2-1.9-.3-2.6-.3"></svg:path>`,
})
export class MdiAccountArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountBadgeIcon],svg[mdi-account-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19.5c0-2 1.1-3.8 2.7-4.7c-1.3-.5-2.9-.8-4.7-.8c-4.4 0-8 1.8-8 4v2h10zm5.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5M16 8c0 2.2-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4"></svg:path>`,
})
export class MdiAccountBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountBadgeOutlineIcon],svg[mdi-account-badge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20H4v-3c0-2.7 5.3-4 8-4c1.5 0 3.9.4 5.7 1.3c-.8.3-1.4.7-2 1.2c-1.1-.4-2.4-.6-3.7-.6c-3 0-6.1 1.5-6.1 2.1v1.1h8.3c-.1.4-.2.9-.2 1.4zm9-.5c0 1.9-1.6 3.5-3.5 3.5S16 21.4 16 19.5s1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5M12 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-2C9.8 4 8 5.8 8 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4"></svg:path>`,
})
export class MdiAccountBadgeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountBoxIcon],svg[mdi-account-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"></svg:path>`,
})
export class MdiAccountBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountBoxEditOutlineIcon],svg[mdi-account-box-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.7 13.58l-1.28-1.28a.55.55 0 0 0-.77 0l-1 1l2.05 2.05l1-1a.55.55 0 0 0 0-.77M12 22h2.06l6.05-6.07l-2.05-2.05L12 19.94zm-2-1H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-.53.21-1.04.59-1.41C3.96 3.21 4.47 3 5 3h14a2 2 0 0 1 2 2v5.33a2.57 2.57 0 0 0-2 .03V5H5v14h5.11l-.11.11zm4.62-6.5L12.11 17H7.5v-.75c0-1.5 3-2.25 4.5-2.25c.7 0 1.73.16 2.62.5m-1.03-2.91c-.42.41-.99.66-1.59.66s-1.17-.25-1.59-.66A2.3 2.3 0 0 1 9.75 10c0-.6.25-1.17.66-1.59c.42-.41.99-.66 1.59-.66s1.17.25 1.59.66c.41.42.66.99.66 1.59s-.25 1.17-.66 1.59"></svg:path>`,
})
export class MdiAccountBoxEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountBoxMinusOutlineIcon],svg[mdi-account-box-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.4 14.15c-.67.8-1.14 1.78-1.32 2.85H7.5v-.75c0-1.5 3-2.25 4.5-2.25c.39 0 .88.05 1.4.15M19 5v7.08c.72.12 1.39.37 2 .72V5a2 2 0 0 0-2-2H5c-.53 0-1.04.21-1.41.59C3.21 3.96 3 4.47 3 5v14c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59h7.8c-.35-.61-.6-1.28-.72-2H5V5zm-7 7.25c.6 0 1.17-.25 1.59-.66c.41-.42.66-.99.66-1.59s-.25-1.17-.66-1.59A2.3 2.3 0 0 0 12 7.75c-.6 0-1.17.25-1.59.66c-.41.42-.66.99-.66 1.59s.25 1.17.66 1.59c.42.41.99.66 1.59.66M22 17v2h-8v-2z"></svg:path>`,
})
export class MdiAccountBoxMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountBoxMultipleIcon],svg[mdi-account-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4zm16-4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-3 5a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3m-9 8v1h12v-1c0-2-4-3.1-6-3.1S8 13 8 15"></svg:path>`,
})
export class MdiAccountBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountBoxMultipleOutlineIcon],svg[mdi-account-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4zm14.5 8.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V15h9M14 10.25c1.24 0 2.25-1.01 2.25-2.25S15.24 5.75 14 5.75S11.75 6.76 11.75 8s1.01 2.25 2.25 2.25M20 2H8c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 14H8V4h12z"></svg:path>`,
})
export class MdiAccountBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountBoxOutlineIcon],svg[mdi-account-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2.5 13.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9M12 12.25A2.25 2.25 0 0 0 14.25 10A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10A2.25 2.25 0 0 0 12 12.25"></svg:path>`,
})
export class MdiAccountBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountBoxPlusOutlineIcon],svg[mdi-account-box-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.4 14.15c-.67.8-1.14 1.78-1.32 2.85H7.5v-.75c0-1.5 3-2.25 4.5-2.25c.39 0 .88.05 1.4.15M19 5v7.08c.72.12 1.39.37 2 .72V5a2 2 0 0 0-2-2H5c-.53 0-1.04.21-1.41.59C3.21 3.96 3 4.47 3 5v14c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59h7.8c-.35-.61-.6-1.28-.72-2H5V5zm-7 7.25c.6 0 1.17-.25 1.59-.66c.41-.42.66-.99.66-1.59s-.25-1.17-.66-1.59A2.3 2.3 0 0 0 12 7.75c-.6 0-1.17.25-1.59.66c-.41.42-.66.99-.66 1.59s.25 1.17.66 1.59c.42.41.99.66 1.59.66M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></svg:path>`,
})
export class MdiAccountBoxPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCancelIcon],svg[mdi-account-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m7.5 9C15 13 13 15 13 17.5s2 4.5 4.5 4.5s4.5-2 4.5-4.5s-2-4.5-4.5-4.5M10 14c-4.42 0-8 1.79-8 4v2h9.5a6.5 6.5 0 0 1-.5-2.5a6.5 6.5 0 0 1 .95-3.36c-.63-.08-1.27-.14-1.95-.14m7.5.5c1.66 0 3 1.34 3 3c0 .56-.15 1.08-.42 1.5L16 14.92c.42-.27.94-.42 1.5-.42M14.92 16L19 20.08c-.42.27-.94.42-1.5.42c-1.66 0-3-1.34-3-3c0-.56.15-1.08.42-1.5"></svg:path>`,
})
export class MdiAccountCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCancelOutlineIcon],svg[mdi-account-cancel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 7c-2.67 0-8 1.33-8 4v3h9.5a6.5 6.5 0 0 1-.47-1.9H3.9V17c0-.64 3.13-2.1 6.1-2.1c.5 0 1 .05 1.5.13a6.5 6.5 0 0 1 1.05-1.74C11.61 13.1 10.71 13 10 13m7.5 0C15 13 13 15 13 17.5s2 4.5 4.5 4.5s4.5-2 4.5-4.5s-2-4.5-4.5-4.5m0 1.5c1.66 0 3 1.34 3 3c0 .56-.15 1.08-.42 1.5L16 14.92c.42-.27.94-.42 1.5-.42M14.92 16L19 20.08c-.42.27-.94.42-1.5.42c-1.66 0-3-1.34-3-3c0-.56.15-1.08.42-1.5"></svg:path>`,
})
export class MdiAccountCancelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCardIcon],svg[mdi-account-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12c2.2 0 4-1.8 4-4S9.2 4 7 4S3 5.8 3 8s1.8 4 4 4m4 8v-5.3c-1.1-.4-2.5-.7-4-.7c-3.9 0-7 1.8-7 4v2zm4-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"></svg:path>`,
})
export class MdiAccountCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCardOutlineIcon],svg[mdi-account-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4C4.8 4 3 5.8 3 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m-7 8c0-2.2 3.1-4 7-4c1.5 0 2.9.3 4 .7V17c-.8-.5-2.2-1-4-1c-3.2 0-5 1.4-5 2h9v2H0zM22 4h-7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14h-7V6h7z"></svg:path>`,
})
export class MdiAccountCardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCashIcon],svg[mdi-account-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8c0 2.21-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4m0 6.72V20H0v-2c0-2.21 3.13-4 7-4c1.5 0 2.87.27 4 .72M24 20H13V3h11zm-8-8.5a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1-5 0M22 7a2 2 0 0 1-2-2h-3c0 1.11-.89 2-2 2v9a2 2 0 0 1 2 2h3c0-1.1.9-2 2-2z"></svg:path>`,
})
export class MdiAccountCashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCashOutlineIcon],svg[mdi-account-cash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11.5a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1-5 0M13 3v17h11V3zm9 13c-1.1 0-2 .9-2 2h-3a2 2 0 0 0-2-2V7c1.11 0 2-.89 2-2h3a2 2 0 0 0 2 2zM7 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-2C4.79 4 3 5.79 3 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 10c-3.87 0-7 1.79-7 4v2h11v-2H2c0-.58 1.75-2 5-2c1.83 0 3.17.45 4 .95v-2.23C9.87 14.27 8.5 14 7 14"></svg:path>`,
})
export class MdiAccountCashOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCheckIcon],svg[mdi-account-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.1 12.5l1.4 1.41l-6.53 6.59L12.5 17l1.4-1.41l2.07 2.08zM10 17l3 3H3v-2c0-2.21 3.58-4 8-4l1.89.11zm1-13a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"></svg:path>`,
})
export class MdiAccountCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCheckOutlineIcon],svg[mdi-account-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.1 12.5l1.4 1.41l-6.53 6.59L12.5 17l1.4-1.41l2.07 2.08zM11 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c.68 0 1.5.09 2.41.26l-1.67 1.67l-.74-.03c-2.97 0-6.1 1.46-6.1 2.1v1.1h6.2L13 20H3v-3c0-2.66 5.33-4 8-4"></svg:path>`,
})
export class MdiAccountCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountChildIcon],svg[mdi-account-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 7c1.63 0 3.12.35 4.5 1.05c1.34.71 2 1.56 2 2.56v5.77c0 1.12-.86 2.06-2.61 2.81V19c0-.95-.86-1.62-2.58-2.03c-.56-.13-1-.19-1.31-.19c-.87 0-1.7.17-2.46.52c-.77.34-1.23.78-1.38 1.31c1.34.53 2.62.8 3.84.8l1-.1v2.63L12 22a9.7 9.7 0 0 1-3.89-.81c-1.75-.75-2.61-1.69-2.61-2.81v-5.77c0-1 .66-1.85 2-2.56Q9.57 9 12 9m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiAccountChildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountChildCircleIcon],svg[mdi-account-child-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 15a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 12m0-10a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 14c.72 0 1.4.15 2.04.5c.64.3.96.7.96 1.17v1.74c1.34-.6 2-1.33 2-2.21v-4.4c0-.8-.5-1.45-1.55-2c-1.05-.54-2.2-.8-3.45-.8s-2.4.26-3.45.8C7.5 11.35 7 12 7 12.8v4.4c0 .8.53 1.49 1.63 2.02c1.09.53 2.21.78 3.37.78l1-.08v-2.01L12 18c-1 0-2-.2-2.95-.61c.12-.39.48-.7 1.08-.98c.59-.28 1.21-.41 1.87-.41m0-12a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 12 9a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 12 4"></svg:path>`,
})
export class MdiAccountChildCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountChildOutlineIcon],svg[mdi-account-child-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m0-7c2.34 0 7 1.16 7 3.5v5.13c0 .87-.69 1.61-1.66 2.16v-7.41c0-.56-2.74-1.84-5.34-1.84s-5.34 1.28-5.34 1.84v5.37c0 .25.65.71 1.62 1.1C9 19 10.93 18.56 12 18.56c1.33 0 4 .66 4 2v.83c-1.37.49-2.93.74-4 .74s-2.62-.25-4-.74c-1.63-.58-3-1.5-3-2.76V13.5c0-2.34 4.66-3.5 7-3.5m0-6.25c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75s1.75-.78 1.75-1.75s-.78-1.75-1.75-1.75M12 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 2 12 2s3.5 1.57 3.5 3.5S13.93 9 12 9"></svg:path>`,
})
export class MdiAccountChildOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCircleIcon],svg[mdi-account-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.23 7.23 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"></svg:path>`,
})
export class MdiAccountCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCircleOutlineIcon],svg[mdi-account-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.9 7.9 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11"></svg:path>`,
})
export class MdiAccountCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountClockIcon],svg[mdi-account-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.63 14.1a7 7 0 0 1 9.27-3.47a7 7 0 0 1 3.47 9.27A6.98 6.98 0 0 1 17 24c-2.7 0-5.17-1.56-6.33-4H1v-2c.06-1.14.84-2.07 2.34-2.82S6.72 14.04 9 14c.57 0 1.11.05 1.63.1M9 4c1.12.03 2.06.42 2.81 1.17S12.93 6.86 12.93 8s-.37 2.08-1.12 2.83s-1.69 1.12-2.81 1.12s-2.06-.37-2.81-1.12S5.07 9.14 5.07 8s.37-2.08 1.12-2.83S7.88 4.03 9 4m8 18a5 5 0 0 0 5-5a5 5 0 0 0-5-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5m-1-8h1.5v2.82l2.44 1.41l-.75 1.3L16 17.69z"></svg:path>`,
})
export class MdiAccountClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountClockOutlineIcon],svg[mdi-account-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h1.5v2.82l2.44 1.41l-.75 1.3L16 17.69zm1-2a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0-2a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-2.79 0-5.2-1.64-6.33-4H1v-3c0-2.66 5.33-4 8-4c.6 0 1.34.07 2.12.2A6.99 6.99 0 0 1 17 10m-7 7c0-.7.1-1.38.29-2c-.42-.07-.86-.1-1.29-.1c-2.97 0-6.1 1.46-6.1 2.1v1.1h7.19A7 7 0 0 1 10 17M9 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 1.9A2.1 2.1 0 0 0 6.9 8A2.1 2.1 0 0 0 9 10.1A2.1 2.1 0 0 0 11.1 8A2.1 2.1 0 0 0 9 5.9"></svg:path>`,
})
export class MdiAccountClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCogIcon],svg[mdi-account-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m7 8a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 19 12zm-7 2c-4.42 0-8 1.79-8 4v2h9.68a7 7 0 0 1-.68-3a7 7 0 0 1 .64-2.91c-.53-.06-1.08-.09-1.64-.09m8 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MdiAccountCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCogOutlineIcon],svg[mdi-account-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m7 6q-.24 0-.24.24l-.26 1.26c-.22.18-.54.34-.78.5l-1.28-.5c-.08 0-.24 0-.32.1l-.96 1.76c-.08.08-.08.24.08.32l1.04.82v1l-1.04.82c-.08.08-.16.24-.08.32l.96 1.76c.08.1.24.1.32.1l1.28-.5c.24.16.56.32.78.5l.26 1.26q0 .24.24.24h2c.08 0 .24-.08.24-.24l.16-1.26c.32-.18.64-.34.88-.5l1.22.5c.14 0 .3 0 .3-.1l1.04-1.76c.08-.08 0-.24-.08-.32l-1.04-.82v-1l1.04-.82c.08-.08.16-.24.08-.32L21.8 13.6c0-.1-.16-.1-.3-.1l-1.22.5c-.24-.16-.56-.32-.88-.5l-.16-1.26c0-.16-.16-.24-.24-.24zm-7 1c-2.67 0-8 1.33-8 4v3h9.67c-.28-.59-.48-1.23-.58-1.9H3.9V17c0-.64 3.13-2.1 6.1-2.1c.43 0 .87.04 1.3.1c.2-.64.47-1.24.82-1.79c-.78-.13-1.52-.21-2.12-.21m8.04 2.5c.8 0 1.46.66 1.46 1.54c0 .8-.66 1.46-1.46 1.46c-.88 0-1.54-.66-1.54-1.46c0-.88.66-1.54 1.54-1.54"></svg:path>`,
})
export class MdiAccountCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountConvertIcon],svg[mdi-account-convert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 0l-.66.03l3.81 3.81L16.5 2.5c3.25 1.57 5.59 4.74 5.95 8.5h1.5C23.44 4.84 18.29 0 12 0m0 4c-1.93 0-3.5 1.57-3.5 3.5S10.07 11 12 11s3.5-1.57 3.5-3.5S13.93 4 12 4M.05 13C.56 19.16 5.71 24 12 24l.66-.03l-3.81-3.81L7.5 21.5c-3.25-1.56-5.59-4.74-5.95-8.5zM12 13c-3.87 0-7 1.57-7 3.5V18h14v-1.5c0-1.93-3.13-3.5-7-3.5"></svg:path>`,
})
export class MdiAccountConvertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountConvertOutlineIcon],svg[mdi-account-convert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 0l-.66.03l3.81 3.81L16.5 2.5c3.25 1.57 5.59 4.74 5.95 8.5h1.5C23.44 4.84 18.29 0 12 0m0 4c-1.93 0-3.5 1.57-3.5 3.5S10.07 11 12 11s3.5-1.57 3.5-3.5S13.93 4 12 4m0 2c.83 0 1.5.67 1.5 1.5S12.83 9 12 9s-1.5-.67-1.5-1.5S11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24l.66-.03l-3.81-3.81L7.5 21.5c-3.25-1.56-5.59-4.74-5.95-8.5zM12 13c-3.87 0-7 1.57-7 3.5V18h14v-1.5c0-1.93-3.13-3.5-7-3.5m0 2c2.11 0 3.61.53 4.39 1H7.61c.78-.47 2.28-1 4.39-1"></svg:path>`,
})
export class MdiAccountConvertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCowboyHatIcon],svg[mdi-account-cowboy-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4v-2c0-2.2 3.6-4 8-4s8 1.8 8 4M8 9h8v1c0 2.2-1.8 4-4 4s-4-1.8-4-4m11-6c-.6 0-1 .4-1 1v1h-1.5l-1.4-3c-.1-.2-.2-.4-.4-.5c-.5-.5-1.3-.6-2-.3l-.7.2l-.7-.3c-.7-.3-1.5-.2-2 .3c-.2.2-.3.4-.4.6L7.5 6H6V5c0-.6-.4-1-1-1s-1 .4-1 1v1c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-.5-.4-1-1-1"></svg:path>`,
})
export class MdiAccountCowboyHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCowboyHatOutlineIcon],svg[mdi-account-cowboy-hat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4c-.6 0-1 .4-1 1v1h-1.5l-1.4-3c-.1-.2-.2-.4-.4-.5c-.5-.5-1.3-.6-2-.3l-.7.2l-.7-.3c-.7-.3-1.5-.2-2 .3c-.2.2-.3.4-.4.6L7.5 6H6V5c0-.6-.4-1-1-1s-1 .4-1 1v1c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-.5-.4-1-1-1M4 22v-3c0-2.67 5.33-4 8-4s8 1.33 8 4v3zm14.1-1.9V19c0-.64-3.13-2.1-6.1-2.1S5.9 18.36 5.9 19v1.1zM16 9v1c0 2.21-1.79 4-4 4s-4-1.79-4-4V9h2v1a2 2 0 1 0 4 0V9z"></svg:path>`,
})
export class MdiAccountCowboyHatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCreditCardIcon],svg[mdi-account-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12c2.2 0 4-1.8 4-4S9.2 4 7 4S3 5.8 3 8s1.8 4 4 4m4 8v-5.3c-1.1-.4-2.5-.7-4-.7c-3.9 0-7 1.8-7 4v2zM22 4h-7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-4 14h-2V6h2z"></svg:path>`,
})
export class MdiAccountCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCreditCardOutlineIcon],svg[mdi-account-credit-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4C4.8 4 3 5.8 3 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m0 4c-3.9 0-7 1.8-7 4v2h11v-2H2c0-.6 1.8-2 5-2c1.8 0 3.2.5 4 1v-2.2c-1.1-.5-2.5-.8-4-.8M22 4h-7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-6 14h-1V6h1zm6 0h-4V6h4z"></svg:path>`,
})
export class MdiAccountCreditCardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountDetailsIcon],svg[mdi-account-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3m3 11H2v-2c0-2.21 2.69-4 6-4s6 1.79 6 4m8-6v2h-9v-2m9-4v2h-9V8m9-4v2h-9V4Z"></svg:path>`,
})
export class MdiAccountDetailsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountDetailsOutlineIcon],svg[mdi-account-details-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3m3 11H2v-2c0-2.21 2.69-4 6-4s6 1.79 6 4M7 9c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1m-3 9h8c0-1.1-1.79-2-4-2s-4 .9-4 2m18-6v2h-9v-2m9-4v2h-9V8m9-4v2h-9V4Z"></svg:path>`,
})
export class MdiAccountDetailsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountEditIcon],svg[mdi-account-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.7 13.35l-1 1l-2.05-2.05l1-1a.55.55 0 0 1 .77 0l1.28 1.28c.21.21.21.56 0 .77M12 18.94l6.06-6.06l2.05 2.05L14.06 21H12zM12 14c-4.42 0-8 1.79-8 4v2h6v-1.89l4-4c-.66-.08-1.33-.11-2-.11m0-10a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiAccountEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountEditOutlineIcon],svg[mdi-account-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17v3h8v-1.89H3.9V17c0-.64 3.13-2.1 6.1-2.1c.96.01 1.91.14 2.83.38l1.52-1.52c-1.4-.47-2.85-.73-4.35-.76c-2.67 0-8 1.33-8 4m8-13C7.79 4 6 5.79 6 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m11.7 3.35l-1 1l-2.05-2l1-1a.55.55 0 0 1 .77 0l1.28 1.28c.21.21.21.56 0 .77M12 18.94l6.06-6.06l2.05 2l-6 6.07H12z"></svg:path>`,
})
export class MdiAccountEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountEyeIcon],svg[mdi-account-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8c0-2.21 1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4m3.14 11.75L8.85 19l.29-.75c.7-1.75 1.94-3.11 3.47-4.03c-.82-.14-1.69-.22-2.61-.22c-4.42 0-8 1.79-8 4v2h7.27c-.04-.09-.09-.17-.13-.25M17 18c-.56 0-1 .44-1 1s.44 1 1 1s1-.44 1-1s-.44-1-1-1m6 1c-.94 2.34-3.27 4-6 4s-5.06-1.66-6-4c.94-2.34 3.27-4 6-4s5.06 1.66 6 4m-3.5 0a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class MdiAccountEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountEyeOutlineIcon],svg[mdi-account-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m-.73 14H2v-3c0-2.67 5.33-4 8-4c1.04 0 2.5.21 3.86.61c-.86.34-1.66.81-2.36 1.39c-.5-.06-1-.1-1.5-.1c-2.97 0-6.1 1.46-6.1 2.1v1.1h5.32c-.02.05-.05.1-.08.15l-.29.75l.29.75c.04.08.09.16.13.25M17 18c.56 0 1 .44 1 1s-.44 1-1 1s-1-.44-1-1s.44-1 1-1m0-3c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class MdiAccountEyeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountFileIcon],svg[mdi-account-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5C9.43 5 11 6.57 11 8.5S9.43 12 7.5 12S4 10.43 4 8.5S5.57 5 7.5 5M1 19v-2.5C1 14.57 4.46 13 7.5 13c1.18 0 2.42.24 3.5.64V19zm21 0h-8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5l4 4v9c0 .55-.45 1-1 1m-4-9h3v-.17L18.17 7H18z"></svg:path>`,
})
export class MdiAccountFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountFileOutlineIcon],svg[mdi-account-file-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5C9.43 5 11 6.57 11 8.5S9.43 12 7.5 12S4 10.43 4 8.5S5.57 5 7.5 5M1 19v-2.5C1 14.57 4.46 13 7.5 13c1.18 0 2.42.24 3.5.64v1.92c-.82-.34-2.09-.56-3.5-.56C5 15 3 15.67 3 16.5v.5h8v2zm21 0h-8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5l4 4v9c0 .55-.45 1-1 1M15 7v10h6v-7h-3V7zM7.5 7C6.67 7 6 7.67 6 8.5S6.67 10 7.5 10S9 9.33 9 8.5S8.33 7 7.5 7"></svg:path>`,
})
export class MdiAccountFileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountFileTextIcon],svg[mdi-account-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5C9.43 5 11 6.57 11 8.5S9.43 12 7.5 12S4 10.43 4 8.5S5.57 5 7.5 5M1 19v-2.5C1 14.57 4.46 13 7.5 13c1.18 0 2.42.24 3.5.64V19zm21 0h-8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5l4 4v9c0 .55-.45 1-1 1m-4-9h3v-.17L18.17 7H18zm-3 2v1.5h6V12zm0 3v1.5h6V15z"></svg:path>`,
})
export class MdiAccountFileTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountFileTextOutlineIcon],svg[mdi-account-file-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5C9.43 5 11 6.57 11 8.5S9.43 12 7.5 12S4 10.43 4 8.5S5.57 5 7.5 5M1 19v-2.5C1 14.57 4.46 13 7.5 13c1.18 0 2.42.24 3.5.64v1.92c-.82-.34-2.09-.56-3.5-.56C5 15 3 15.67 3 16.5v.5h8v2zm21 0h-8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5l4 4v9c0 .55-.45 1-1 1M15 7v10h6v-7h-3V7zM7.5 7C6.67 7 6 7.67 6 8.5S6.67 10 7.5 10S9 9.33 9 8.5S8.33 7 7.5 7m8.5 6h4v2h-4z"></svg:path>`,
})
export class MdiAccountFileTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountFilterIcon],svg[mdi-account-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4c2.2 0 4 1.8 4 4s-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4m7 17l1.8 1.77c.5.5 1.2.1 1.2-.49V18l2.8-3.4A1 1 0 0 0 22 13h-7c-.8 0-1.3 1-.8 1.6L17 18zm-2-2.3l-2.3-2.8c-.4-.5-.6-1.1-.6-1.7c-.7-.2-1.4-.2-2.1-.2c-4.4 0-8 1.8-8 4v2h13z"></svg:path>`,
})
export class MdiAccountFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountFilterOutlineIcon],svg[mdi-account-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 21l1.8 1.77c.5.5 1.2.1 1.2-.49V18l2.8-3.4A1 1 0 0 0 22 13h-7c-.8 0-1.3 1-.8 1.6L17 18zm-2-1H2v-3c0-2.7 5.3-4 8-4c.6 0 1.3.1 2.1.2c-.2.6-.1 1.3.1 1.9c-.7-.1-1.5-.2-2.2-.2c-3 0-6.1 1.5-6.1 2.1v1.1h10.6l.5.6zM10 4C7.8 4 6 5.8 6 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class MdiAccountFilterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountGroupIcon],svg[mdi-account-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z"></svg:path>`,
})
export class MdiAccountGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountGroupOutlineIcon],svg[mdi-account-group-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 12a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 5m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 10a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 7M5.5 8A2.5 2.5 0 0 0 3 10.5c0 .94.53 1.75 1.29 2.18c.36.2.77.32 1.21.32s.85-.12 1.21-.32c.37-.21.68-.51.91-.87A5.42 5.42 0 0 1 6.5 8.5v-.28c-.3-.14-.64-.22-1-.22m13 0c-.36 0-.7.08-1 .22v.28c0 1.2-.39 2.36-1.12 3.31c.12.19.25.34.4.49a2.48 2.48 0 0 0 1.72.7c.44 0 .85-.12 1.21-.32c.76-.43 1.29-1.24 1.29-2.18A2.5 2.5 0 0 0 18.5 8M12 14c-2.34 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.66-3.5-7-3.5m-7.29.55C2.78 14.78 0 15.76 0 17.5V19h3v-1.93c0-1.01.69-1.85 1.71-2.52m14.58 0c1.02.67 1.71 1.51 1.71 2.52V19h3v-1.5c0-1.74-2.78-2.72-4.71-2.95M12 16c1.53 0 3.24.5 4.23 1H7.77c.99-.5 2.7-1 4.23-1"></svg:path>`,
})
export class MdiAccountGroupOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountHardHatIcon],svg[mdi-account-hard-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4M8 9a4 4 0 0 0 4 4a4 4 0 0 0 4-4m-4.5-7c-.3 0-.5.21-.5.5v3h-1V3s-2.25.86-2.25 3.75c0 0-.75.14-.75 1.25h10c-.05-1.11-.75-1.25-.75-1.25C16.25 3.86 14 3 14 3v2.5h-1v-3c0-.29-.19-.5-.5-.5z"></svg:path>`,
})
export class MdiAccountHardHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountHardHatOutlineIcon],svg[mdi-account-hard-hat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9c0 5.33-8 5.33-8 0h2c0 2.67 4 2.67 4 0m6 9v3H4v-3c0-2.67 5.33-4 8-4s8 1.33 8 4m-1.9 0c0-.64-3.13-2.1-6.1-2.1S5.9 17.36 5.9 18v1.1h12.2M12.5 2c.28 0 .5.22.5.5v3h1V3a3.89 3.89 0 0 1 2.25 3.75s.7.14.75 1.25H7c0-1.11.75-1.25.75-1.25A3.89 3.89 0 0 1 10 3v2.5h1v-3c0-.28.22-.5.5-.5"></svg:path>`,
})
export class MdiAccountHardHatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountHeartIcon],svg[mdi-account-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4m0-2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4M5 15l-.6-.5C2.4 12.6 1 11.4 1 9.9c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8C8 7.7 9 8.6 9 9.9c0 1.5-1.4 2.7-3.4 4.6z"></svg:path>`,
})
export class MdiAccountHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountHeartOutlineIcon],svg[mdi-account-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 15l-.6-.5C2.4 12.6 1 11.4 1 9.9c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8C8 7.7 9 8.6 9 9.9c0 1.5-1.4 2.7-3.4 4.6zM15 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 6.1A2.1 2.1 0 0 1 12.9 8A2.1 2.1 0 0 1 15 5.9a2.1 2.1 0 1 1 0 4.2m0 2.9c-2.67 0-8 1.33-8 4v3h16v-3c0-2.67-5.33-4-8-4m6.1 5.1H8.9V17c0-.64 3.1-2.1 6.1-2.1c2.97 0 6.1 1.46 6.1 2.1z"></svg:path>`,
})
export class MdiAccountHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountInjuryIcon],svg[mdi-account-injury-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6c0-2.21 1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4m9 16h1c1.1 0 2-.9 2-2v-4.78c0-1.12-.61-2.15-1.61-2.66c-.43-.22-.89-.43-1.39-.62zm-4.66-5L15 11.33c-.93-.21-1.93-.33-3-.33c-2.53 0-4.71.7-6.39 1.56A2.97 2.97 0 0 0 4 15.22V22h2.34c-.22-.45-.34-.96-.34-1.5C6 18.57 7.57 17 9.5 17zM10 22l1.41-3H9.5c-.83 0-1.5.67-1.5 1.5S8.67 22 9.5 22z"></svg:path>`,
})
export class MdiAccountInjuryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountInjuryOutlineIcon],svg[mdi-account-injury-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m6.39 8.56C16.71 11.7 14.53 11 12 11s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 4 15.22V22h2v-6.78c0-.38.2-.72.5-.88C7.71 13.73 9.63 13 12 13c.76 0 1.47.07 2.13.2l-1.55 3.3H9.75C8.23 16.5 7 17.73 7 19.25S8.23 22 9.75 22H18c1.1 0 2-.9 2-2v-4.78c0-1.12-.61-2.15-1.61-2.66M10.94 20H9.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.89zM18 20h-4.85l2.94-6.27c.54.2 1.01.41 1.41.61c.3.16.5.5.5.88z"></svg:path>`,
})
export class MdiAccountInjuryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountKeyIcon],svg[mdi-account-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10v2H9v2H7v-2H5.8c-.4 1.2-1.5 2-2.8 2c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.3 0 2.4.8 2.8 2zm-8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m13 4c2.7 0 8 1.3 8 4v2H8v-2c0-2.7 5.3-4 8-4m0-2c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4"></svg:path>`,
})
export class MdiAccountKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountKeyOutlineIcon],svg[mdi-account-key-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.8 10C5.4 8.8 4.3 8 3 8c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2H7v2h2v-2h2v-2zM3 12c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m13-8c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 6.1c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1s2.1.9 2.1 2.1s-.9 2.1-2.1 2.1m0 2.9c-2.7 0-8 1.3-8 4v3h16v-3c0-2.7-5.3-4-8-4m6.1 5.1H9.9V17c0-.6 3.1-2.1 6.1-2.1s6.1 1.5 6.1 2.1z"></svg:path>`,
})
export class MdiAccountKeyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountLockIcon],svg[mdi-account-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8c0-2.21 1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4m6 10.2c0-.96.5-1.86 1.2-2.46v-.24c0-.39.07-.76.18-1.12c-1.03-.24-2.17-.38-3.38-.38c-4.42 0-8 1.79-8 4v2h10zm10 .1v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V17c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V17h3z"></svg:path>`,
})
export class MdiAccountLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountLockOpenIcon],svg[mdi-account-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8c0-2.21 1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4m6 10.2c0-.96.5-1.86 1.2-2.46V14.5c0-.05.02-.11.02-.16c-.99-.22-2.07-.34-3.22-.34c-4.42 0-8 1.79-8 4v2h10zm10 .1v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-2.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5v.5h-1.3v-.5c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V17h4.3c.6 0 1.2.6 1.2 1.3"></svg:path>`,
})
export class MdiAccountLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountLockOpenOutlineIcon],svg[mdi-account-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m2 14H2v-3c0-2.67 5.33-4 8-4c.91 0 2.13.16 3.35.47c-.09.33-.15.68-.15 1.03v.89c-.98-.29-2.1-.49-3.2-.49c-2.97 0-6.1 1.46-6.1 2.1v1.1H12zm8.8-3h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiAccountLockOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountLockOutlineIcon],svg[mdi-account-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m2 14H2v-3c0-2.67 5.33-4 8-4c1 0 2.38.19 3.71.56c-.3.56-.48 1.18-.5 1.83c-.98-.29-2.1-.49-3.21-.49c-2.97 0-6.1 1.46-6.1 2.1v1.1H12zm8.8-3v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z"></svg:path>`,
})
export class MdiAccountLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMinusIcon],svg[mdi-account-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4M1 10v2h8v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4"></svg:path>`,
})
export class MdiAccountMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMinusOutlineIcon],svg[mdi-account-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 1.9a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 12.9 8A2.1 2.1 0 0 1 15 5.9M1 10v2h8v-2zm14 3c-2.67 0-8 1.33-8 4v3h16v-3c0-2.67-5.33-4-8-4m0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H8.9V17c0-.64 3.1-2.1 6.1-2.1"></svg:path>`,
})
export class MdiAccountMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMultipleIcon],svg[mdi-account-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.4 3.4 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.4 3.4 0 0 0 15 11a3.5 3.5 0 0 0 0-7"></svg:path>`,
})
export class MdiAccountMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMultipleCheckIcon],svg[mdi-account-multiple-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.9 2.9 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.9 2.9 0 0 0 18 11a3 3 0 0 0 0-6M7.34 8.92l1.16 1.41l-4.75 4.75l-2.75-3l1.16-1.16l1.59 1.58z"></svg:path>`,
})
export class MdiAccountMultipleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMultipleCheckOutlineIcon],svg[mdi-account-multiple-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m4.11 3.86a5 5 0 0 0 0-5.72A2.9 2.9 0 0 1 18 5a3 3 0 0 1 0 6a2.9 2.9 0 0 1-.89-.14M13 13c-6 0-6 4-6 4v2h12v-2s0-4-6-4m-4 4c0-.29.32-2 4-2c3.5 0 3.94 1.56 4 2m7 0v2h-3v-2a5.6 5.6 0 0 0-1.8-3.94C24 13.55 24 17 24 17M7.34 8.92l1.16 1.41l-4.75 4.75l-2.75-3l1.16-1.16l1.59 1.58z"></svg:path>`,
})
export class MdiAccountMultipleCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMultipleMinusIcon],svg[mdi-account-multiple-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.9 2.9 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.9 2.9 0 0 0 18 11a3 3 0 0 0 0-6M8 10H0v2h8Z"></svg:path>`,
})
export class MdiAccountMultipleMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMultipleMinusOutlineIcon],svg[mdi-account-multiple-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m4.11 3.86a5 5 0 0 0 0-5.72A2.9 2.9 0 0 1 18 5a3 3 0 0 1 0 6a2.9 2.9 0 0 1-.89-.14M13 13c-6 0-6 4-6 4v2h12v-2s0-4-6-4m-4 4c0-.29.32-2 4-2c3.5 0 3.94 1.56 4 2m7 0v2h-3v-2a5.6 5.6 0 0 0-1.8-3.94C24 13.55 24 17 24 17M8 12H0v-2h8Z"></svg:path>`,
})
export class MdiAccountMultipleMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMultipleOutlineIcon],svg[mdi-account-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.07 10.41a5 5 0 0 0 0-5.82A3.4 3.4 0 0 1 15 4a3.5 3.5 0 0 1 0 7a3.4 3.4 0 0 1-1.93-.59M5.5 7.5A3.5 3.5 0 1 1 9 11a3.5 3.5 0 0 1-3.5-3.5m2 0A1.5 1.5 0 1 0 9 6a1.5 1.5 0 0 0-1.5 1.5M16 17v2H2v-2s0-4 7-4s7 4 7 4m-2 0c-.14-.78-1.33-2-5-2s-4.93 1.31-5 2m11.95-4A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4Z"></svg:path>`,
})
export class MdiAccountMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMultiplePlusIcon],svg[mdi-account-multiple-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.9 2.9 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.9 2.9 0 0 0 18 11a3 3 0 0 0 0-6M8 10H5V7H3v3H0v2h3v3h2v-3h3Z"></svg:path>`,
})
export class MdiAccountMultiplePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMultiplePlusOutlineIcon],svg[mdi-account-multiple-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m4.11 3.86a5 5 0 0 0 0-5.72A2.9 2.9 0 0 1 18 5a3 3 0 0 1 0 6a2.9 2.9 0 0 1-.89-.14M13 13c-6 0-6 4-6 4v2h12v-2s0-4-6-4m-4 4c0-.29.32-2 4-2c3.5 0 3.94 1.56 4 2m7 0v2h-3v-2a5.6 5.6 0 0 0-1.8-3.94C24 13.55 24 17 24 17M8 12H5v3H3v-3H0v-2h3V7h2v3h3Z"></svg:path>`,
})
export class MdiAccountMultiplePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMultipleRemoveIcon],svg[mdi-account-multiple-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 17v2h-3v-2c0-1.55-.7-2.94-1.82-3.94C24 13.55 24 17 24 17M18 5c1.66 0 3 1.34 3 3a2.996 2.996 0 0 1-3.9 2.86c.57-.81.9-1.79.9-2.86c0-1.06-.33-2.05-.9-2.86c.28-.09.59-.14.9-.14m-5 0c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12v2H7v-2c0-2.21 2.69-4 6-4s6 1.79 6 4M.464 13.12L2.59 11L.464 8.88L1.88 7.46L4 9.59l2.12-2.13l1.42 1.42L5.41 11l2.13 2.12l-1.42 1.42L4 12.41l-2.12 2.13Z"></svg:path>`,
})
export class MdiAccountMultipleRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMultipleRemoveOutlineIcon],svg[mdi-account-multiple-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 17v2h-3v-2c0-1.55-.7-2.94-1.82-3.94C24 13.55 24 17 24 17M18 5c1.66 0 3 1.34 3 3a2.996 2.996 0 0 1-3.9 2.86c.57-.81.9-1.79.9-2.86c0-1.06-.33-2.05-.9-2.86c.28-.09.59-.14.9-.14m-5 0c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12v2H7v-2c0-2.21 2.69-4 6-4s6 1.79 6 4M13 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 8c-2.21 0-4 .9-4 2h8c0-1.1-1.79-2-4-2M.464 13.12L2.59 11L.464 8.88L1.88 7.46L4 9.59l2.12-2.13l1.42 1.42L5.41 11l2.13 2.12l-1.42 1.42L4 12.41l-2.12 2.13Z"></svg:path>`,
})
export class MdiAccountMultipleRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMusicIcon],svg[mdi-account-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14c1 0 2.05.16 3.2.44c-.81.87-1.2 1.89-1.2 3.06c0 .89.25 1.73.78 2.5H3v-2c0-1.19.91-2.15 2.74-2.88C7.57 14.38 9.33 14 11 14m0-2c-1.08 0-2-.39-2.82-1.17C7.38 10.05 7 9.11 7 8c0-1.08.38-2 1.18-2.82C9 4.38 9.92 4 11 4c1.11 0 2.05.38 2.83 1.18C14.61 6 15 6.92 15 8c0 1.11-.39 2.05-1.17 2.83S12.11 12 11 12m7.5-2H22v2h-2v5.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5c.36 0 .69.07 1 .21z"></svg:path>`,
})
export class MdiAccountMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMusicOutlineIcon],svg[mdi-account-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c1.1 0 2.66.23 4.11.69c-.61.38-1.11.91-1.5 1.54c-.82-.2-1.72-.33-2.61-.33c-2.97 0-6.1 1.46-6.1 2.1v1.1h8.14c.09.7.34 1.34.72 1.9H3v-3c0-2.66 5.33-4 8-4m7.5-3H22v2h-2v5.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5c.36 0 .69.07 1 .21z"></svg:path>`,
})
export class MdiAccountMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountNetworkIcon],svg[mdi-account-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17v2h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H5v-1.5c0-1.93 3.13-3.5 7-3.5s7 1.57 7 3.5V17zM12 3a3.5 3.5 0 0 1 3.5 3.5A3.5 3.5 0 0 1 12 10a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 12 3"></svg:path>`,
})
export class MdiAccountNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountNetworkOffIcon],svg[mdi-account-network-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.03 9.83L8.67 5.47A3.49 3.49 0 0 1 12 3c1.93 0 3.5 1.57 3.5 3.5c0 1.57-1.04 2.89-2.47 3.33M19 15.5c0-1.24-1.3-2.33-3.25-2.95L19 15.8zm3 6.5h-.43l-.73.73l-.73-.73H15c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1H2v-2h7c0-.55.45-1 1-1h1v-2H5v-1.5c0-1.62 2.22-3 5.23-3.38L1.11 3l1.28-1.27L22 21.34v.01l.11.11l-.11.11zm-3.89-2l-3-3H13v2h1c.55 0 1 .45 1 1z"></svg:path>`,
})
export class MdiAccountNetworkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountNetworkOffOutlineIcon],svg[mdi-account-network-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 15.8l-3.25-3.25c1.95.62 3.25 1.71 3.25 2.95zm-5.97-5.97L8.67 5.47A3.49 3.49 0 0 1 12 3c1.93 0 3.5 1.57 3.5 3.5c0 1.57-1.04 2.89-2.47 3.33M12 8c.83 0 1.5-.67 1.5-1.5S12.83 5 12 5s-1.5.67-1.5 1.5S11.17 8 12 8m10 14h-.43l-.73.73l-.73-.73H15c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1H2v-2h7c0-.55.45-1 1-1h1v-2H5v-1.5c0-1.62 2.22-3 5.23-3.38L1.11 3l1.28-1.27L22 21.34v.01l.11.11l-.11.11zm-8.89-7l-1-1H12c-2.11 0-3.61.53-4.39 1zm5 5l-3-3H13v2h1c.55 0 1 .45 1 1z"></svg:path>`,
})
export class MdiAccountNetworkOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountNetworkOutlineIcon],svg[mdi-account-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 3a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 10m0-5a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 5m3 15a1 1 0 0 0-1-1h-1v-2h6v-1.5c0-1.93-3.13-3.5-7-3.5s-7 1.57-7 3.5V17h6v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2zm-7.39-5c.78-.47 2.28-1 4.39-1s3.61.53 4.39 1z"></svg:path>`,
})
export class MdiAccountNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountOffIcon],svg[mdi-account-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L8.07 7.25A4.004 4.004 0 0 1 12 4m.28 10l6 6L20 21.72L18.73 23l-3-3H4v-2c0-1.84 2.5-3.39 5.87-3.86L2.78 7.05l1.27-1.27zM20 18v1.18l-4.86-4.86C18 14.93 20 16.35 20 18"></svg:path>`,
})
export class MdiAccountOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountOffOutlineIcon],svg[mdi-account-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.75 7l1.28-1.25L13.26 15L20 21.72L18.73 23l-3-3H4v-3c0-1.86 2.61-3.08 5.09-3.64zM20 17v2.18l-1.9-1.9V17c0-.26-.5-.65-1.3-1L14 13.18c2.71.45 6 1.73 6 3.82M5.9 17v1.1h7.93L10.72 15c-2.53.3-4.82 1.45-4.82 2M12 4a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L8.07 7.25A4.004 4.004 0 0 1 12 4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiAccountOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountOutlineIcon],svg[mdi-account-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"></svg:path>`,
})
export class MdiAccountOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountPlusIcon],svg[mdi-account-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4"></svg:path>`,
})
export class MdiAccountPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountPlusOutlineIcon],svg[mdi-account-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 1.9a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 12.9 8A2.1 2.1 0 0 1 15 5.9M4 7v3H1v2h3v3h2v-3h3v-2H6V7zm11 6c-2.67 0-8 1.33-8 4v3h16v-3c0-2.67-5.33-4-8-4m0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H8.9V17c0-.64 3.1-2.1 6.1-2.1"></svg:path>`,
})
export class MdiAccountPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountQuestionIcon],svg[mdi-account-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4m4 10v2H1v-2c0-2.21 3.58-4 8-4s8 1.79 8 4m3.5-3.5V16H19v-1.5zm-2-5H17V9a3 3 0 0 1 3-3a3 3 0 0 1 3 3c0 .97-.5 1.88-1.29 2.41l-.3.19c-.57.4-.91 1.01-.91 1.7v.2H19v-.2c0-1.19.6-2.3 1.59-2.95l.29-.19c.39-.26.62-.69.62-1.16A1.5 1.5 0 0 0 20 7.5A1.5 1.5 0 0 0 18.5 9z"></svg:path>`,
})
export class MdiAccountQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountQuestionOutlineIcon],svg[mdi-account-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 14.5V16H19v-1.5zm-2-5H17V9a3 3 0 0 1 3-3a3 3 0 0 1 3 3c0 .97-.5 1.88-1.29 2.41l-.3.19c-.57.4-.91 1.01-.91 1.7v.2H19v-.2c0-1.19.6-2.3 1.59-2.95l.29-.19c.39-.26.62-.69.62-1.16A1.5 1.5 0 0 0 20 7.5A1.5 1.5 0 0 0 18.5 9zM9 13c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4m0-9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1m0-9A2.1 2.1 0 0 0 6.9 8A2.1 2.1 0 0 0 9 10.1A2.1 2.1 0 0 0 11.1 8A2.1 2.1 0 0 0 9 5.9"></svg:path>`,
})
export class MdiAccountQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountReactivateIcon],svg[mdi-account-reactivate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 9h-5l1.86-1.86A7.99 7.99 0 0 0 12 4c-4.42 0-8 3.58-8 8c0 1.83.61 3.5 1.64 4.85c1.22-1.4 3.51-2.35 6.36-2.35s5.15.95 6.36 2.35A7.95 7.95 0 0 0 20 12h2c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2c3.14 0 5.95 1.45 7.78 3.72L21.5 4zM12 7c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3"></svg:path>`,
})
export class MdiAccountReactivateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountReactivateOutlineIcon],svg[mdi-account-reactivate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 9h-5l1.86-1.86A7.99 7.99 0 0 0 12 4c-4.42 0-8 3.58-8 8c0 1.83.61 3.5 1.64 4.85c1.22-1.4 3.51-2.35 6.36-2.35s5.15.95 6.36 2.35A7.95 7.95 0 0 0 20 12h2c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2c3.14 0 5.95 1.45 7.78 3.72L21.5 4zM12 20c1.9 0 3.64-.66 5-1.76c-.64-1.01-2.55-1.74-5-1.74s-4.36.73-5 1.74c1.36 1.1 3.1 1.76 5 1.76m0-14c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 2c-.83 0-1.5.67-1.5 1.5S11.17 11 12 11s1.5-.67 1.5-1.5S12.83 8 12 8"></svg:path>`,
})
export class MdiAccountReactivateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountRemoveIcon],svg[mdi-account-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14c2.67 0 8 1.33 8 4v2H7v-2c0-2.67 5.33-4 8-4m0-2a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4M5 9.59l2.12-2.13l1.42 1.42L6.41 11l2.13 2.12l-1.42 1.42L5 12.41l-2.12 2.13l-1.42-1.42L3.59 11L1.46 8.88l1.42-1.42z"></svg:path>`,
})
export class MdiAccountRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountRemoveOutlineIcon],svg[mdi-account-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.46 8.88l1.42-1.42L5 9.59l2.12-2.13l1.42 1.42L6.41 11l2.13 2.12l-1.42 1.42L5 12.41l-2.12 2.13l-1.42-1.42L3.59 11zM15 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 1.9A2.1 2.1 0 0 0 12.9 8a2.1 2.1 0 0 0 2.1 2.1a2.1 2.1 0 1 0 0-4.2m0 7.1c2.67 0 8 1.33 8 4v3H7v-3c0-2.67 5.33-4 8-4m0 1.9c-3 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"></svg:path>`,
})
export class MdiAccountRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSchoolIcon],svg[mdi-account-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4l.11-.94L5 5.5L12 2l7 3.5v5h-1V6l-2.11 1.06zm-4 6c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></svg:path>`,
})
export class MdiAccountSchoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSchoolOutlineIcon],svg[mdi-account-school-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10.5V6l-2.11 1.06A4 4 0 0 1 12 12a4 4 0 0 1-3.89-4.94L5 5.5L12 2l7 3.5v5zM12 9l-2-1c0 1.1.9 2 2 2s2-.9 2-2zm2.75-3.58L12.16 4.1L9.47 5.47l2.6 1.32zM12 13c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-3 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"></svg:path>`,
})
export class MdiAccountSchoolOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSearchIcon],svg[mdi-account-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M10 4a4 4 0 0 1 4 4c0 .91-.31 1.75-.82 2.43c-.86.32-1.63.83-2.27 1.47L10 12a4 4 0 0 1-4-4a4 4 0 0 1 4-4M2 20v-2c0-2.12 3.31-3.86 7.5-4c-.32.78-.5 1.62-.5 2.5c0 1.29.38 2.5 1 3.5z"></svg:path>`,
})
export class MdiAccountSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSearchOutlineIcon],svg[mdi-account-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13c-.35.59-.64 1.24-.81 1.93C6.5 15.16 3.9 16.42 3.9 17v1.1h5.3c.17.68.45 1.32.8 1.9H2v-3c0-2.66 5.33-4 8-4m0-9a4 4 0 0 1 4 4c0 .91-.31 1.75-.82 2.43c-.86.32-1.63.83-2.27 1.47L10 12a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 1.9A2.1 2.1 0 0 0 7.9 8a2.1 2.1 0 0 0 2.1 2.1A2.1 2.1 0 0 0 12.1 8A2.1 2.1 0 0 0 10 5.9m5.5 6.1c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"></svg:path>`,
})
export class MdiAccountSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSettingsIcon],svg[mdi-account-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4m-5 8h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiAccountSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSettingsOutlineIcon],svg[mdi-account-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1m1 7.1h-2v2h2zm4 0h-2v2h2zm-8 0H7v2h2z"></svg:path>`,
})
export class MdiAccountSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSettingsVariantIcon],svg[mdi-account-settings-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.999 3.999a4.002 4.002 0 0 0 0 8.003a3.999 3.999 0 0 0 3.998-4.005A3.998 3.998 0 0 0 9 4zm0 10C6.329 13.999 1 15.332 1 17.997V20H12.08a6.233 6.233 0 0 1-.078-1.001c0-1.514.493-2.988 1.407-4.199c-1.529-.523-3.228-.801-4.41-.801zm8.99 0a.261.261 0 0 0-.25.21l-.19 1.319a4.091 4.091 0 0 0-.85.492l-1.24-.502a.265.265 0 0 0-.308.112l-1.001 1.729a.255.255 0 0 0 .059.322l1.06.83a3.95 3.95 0 0 0 0 .981l-1.06.83a.26.26 0 0 0-.059.318l1.001 1.729c.059.111.19.151.308.111l1.24-.497c.258.2.542.366.85.488l.19 1.318c.02.122.122.21.25.21h2.001c.122 0 .23-.088.25-.21l.19-1.318c.297-.132.59-.288.84-.488l1.25.497c.111.04.239 0 .313-.111l.996-1.729a.256.256 0 0 0-.059-.317l-1.07-.83c.02-.162.04-.323.04-.494c0-.171-.01-.328-.04-.488l1.06-.83c.087-.084.121-.21.059-.322l-.996-1.729a.263.263 0 0 0-.313-.113l-1.24.503c-.26-.2-.543-.37-.85-.492l-.19-1.32a.238.238 0 0 0-.24-.21M18.989 17.5c.83 0 1.5.669 1.5 1.499c0 .83-.67 1.498-1.5 1.498S17.49 19.83 17.49 19s.669-1.499 1.499-1.499z" fill="currentColor"></svg:path>`,
})
export class MdiAccountSettingsVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountStarIcon],svg[mdi-account-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m0-2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4M5 13.28l2.45 1.49l-.65-2.81L9 10.08l-2.89-.25L5 7.19L3.87 9.83L1 10.08l2.18 1.88l-.68 2.81z"></svg:path>`,
})
export class MdiAccountStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountStarOutlineIcon],svg[mdi-account-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 1.9A2.1 2.1 0 0 0 12.9 8a2.1 2.1 0 0 0 2.1 2.1a2.1 2.1 0 1 0 0-4.2m0 7.1c2.67 0 8 1.33 8 4v3H7v-3c0-2.67 5.33-4 8-4m0 1.9c-3 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1M5 13.28l-2.5 1.49l.68-2.81L1 10.08l2.87-.25L5 7.19l1.11 2.64l2.89.25l-2.2 1.88l.65 2.81z"></svg:path>`,
})
export class MdiAccountStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSupervisorIcon],svg[mdi-account-supervisor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 12A2.5 2.5 0 0 0 19 9.5A2.5 2.5 0 0 0 16.5 7A2.5 2.5 0 0 0 14 9.5a2.5 2.5 0 0 0 2.5 2.5M9 11a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3m7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13"></svg:path>`,
})
export class MdiAccountSupervisorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSupervisorCircleIcon],svg[mdi-account-supervisor-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m3.6 6.34c1.07 0 1.93.86 1.93 1.93s-.86 1.93-1.93 1.93a1.93 1.93 0 0 1-1.93-1.93c-.01-1.07.86-1.93 1.93-1.93m-6-1.58c1.3 0 2.36 1.06 2.36 2.36S10.9 11.5 9.6 11.5s-2.36-1.08-2.36-2.38c0-1.31 1.05-2.36 2.36-2.36m0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96C5.5 13.56 8.13 13 9.6 13c.53 0 1.2.07 1.9.21c-1.64.87-1.9 2.02-1.9 2.68M12 20c-.28 0-.54 0-.8-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13c1.07 0 2.9.39 3.84 1.15C18.27 17.88 15.38 20 12 20"></svg:path>`,
})
export class MdiAccountSupervisorCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSupervisorCircleOutlineIcon],svg[mdi-account-supervisor-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 10c0-1.66-1.34-3-3-3c-1.64 0-3 1.34-3 3c0 1.64 1.36 3 3 3c1.66 0 3-1.36 3-3m-3 1c-.54 0-1-.46-1-1c0-.56.46-1 1-1c.56 0 1 .44 1 1c0 .54-.44 1-1 1m6.5 2c1.12 0 2-.9 2-2c0-1.12-.88-2-2-2c-1.1 0-2 .88-2 2c0 1.1.9 2 2 2M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M5.85 17.11C6.53 16.57 8.12 16 9.5 16h.24c.26-.63.67-1.28 1.3-1.85c-.54-.1-1.09-.15-1.54-.15c-1.29 0-3.38.44-4.72 1.42C4.28 14.38 4 13.22 4 12c0-4.42 3.59-8 8-8s8 3.58 8 8c0 1.19-.27 2.33-.75 3.36c-1-.59-2.36-.86-3.25-.86c-1.5 0-4.5.8-4.5 2.69v2.78a7.93 7.93 0 0 1-5.65-2.86"></svg:path>`,
})
export class MdiAccountSupervisorCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSupervisorOutlineIcon],svg[mdi-account-supervisor-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 15.5c1.72 0 3.75.8 4 1.28v.72h-8v-.72c.25-.48 2.28-1.28 4-1.28m0-1.5c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-1.5H3.5v-1c0-.63 2.79-2.16 6.32-2a5.1 5.1 0 0 1 1.55-1.25A12.3 12.3 0 0 0 9 13m0-6.5A1.5 1.5 0 1 1 7.5 8A1.5 1.5 0 0 1 9 6.5M9 5a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7.5 3.5a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0-1.5A2.5 2.5 0 1 0 19 9.5A2.5 2.5 0 0 0 16.5 7"></svg:path>`,
})
export class MdiAccountSupervisorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSwitchIcon],svg[mdi-account-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9c6 0 6 4 6 4v2h-6v-2s0-1.69-1.15-3.2c-.17-.23-.38-.45-.6-.66C14.77 9.06 15.34 9 16 9M2 13s0-4 6-4s6 4 6 4v2H2zm7 4v2h6v-2l3 3l-3 3v-2H9v2l-3-3zM8 1C6.34 1 5 2.34 5 4s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m8 0c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"></svg:path>`,
})
export class MdiAccountSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSwitchOutlineIcon],svg[mdi-account-switch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9c6 0 6 4 6 4v2h-6v-2s0-1.69-1.15-3.2c-.17-.23-.38-.45-.6-.66C14.77 9.06 15.34 9 16 9m-8 2c3.5 0 3.94 1.56 4 2H4c.06-.44.5-2 4-2m0-2c-6 0-6 4-6 4v2h12v-2s0-4-6-4m1 8v2h6v-2l3 3l-3 3v-2H9v2l-3-3zM8 3c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0-2C6.34 1 5 2.34 5 4s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m8 0c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"></svg:path>`,
})
export class MdiAccountSwitchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSyncIcon],svg[mdi-account-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4C8.8 4 7 5.8 7 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 10c-4.4 0-8 1.8-8 4v2h9.5c-.3-.8-.5-1.6-.5-2.5c0-1.2.3-2.3.9-3.4c-.6 0-1.2-.1-1.9-.1m7 6c-1.4 0-2.5-1.1-2.5-2.5c0-.4.1-.8.3-1.1l-1.1-1.1c-.4.6-.7 1.4-.7 2.2c0 2.2 1.8 4 4 4V23l2.2-2.2l-2.2-2.3zm0-6.5V12l-2.2 2.2l2.2 2.2V15c1.4 0 2.5 1.1 2.5 2.5c0 .4-.1.8-.3 1.1l1.1 1.1c.4-.6.7-1.4.7-2.2c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class MdiAccountSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSyncOutlineIcon],svg[mdi-account-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4C8.8 4 7 5.8 7 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 7c-2.7 0-8 1.3-8 4v3h9.5c-.3-.6-.4-1.2-.5-1.9H4.9V17c0-.6 3.1-2.1 6.1-2.1c.5 0 1 .1 1.5.1c.3-.6.6-1.2 1.1-1.7c-1-.2-1.9-.3-2.6-.3m7 7c-1.4 0-2.5-1.1-2.5-2.5c0-.4.1-.8.3-1.1l-1.1-1.1c-.4.6-.7 1.4-.7 2.2c0 2.2 1.8 4 4 4V23l2.2-2.2l-2.2-2.3zm0-6.5V12l-2.2 2.2l2.2 2.2V15c1.4 0 2.5 1.1 2.5 2.5c0 .4-.1.8-.3 1.1l1.1 1.1c.4-.6.7-1.4.7-2.2c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class MdiAccountSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountTagIcon],svg[mdi-account-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.8 17.8l-3.6-3.6c-.2-.1-.4-.2-.6-.2h-2.8c-.4 0-.8.4-.8.8v2.8c0 .2.1.4.2.6l3.6 3.6c.1.1.3.2.6.2c.2 0 .4-.1.6-.2l2.8-2.8c.1-.1.2-.3.2-.6c0-.2-.1-.4-.2-.6M15.4 16c-.3 0-.6-.3-.6-.6s.3-.6.6-.6s.6.3.6.6s-.3.6-.6.6M10 4C7.8 4 6 5.8 6 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 10c-4.4 0-8 1.8-8 4v2h11.2l-.4-.4c-.5-.5-.8-1.2-.8-2v-2.8c0-.2 0-.4.1-.7c-.7-.1-1.4-.1-2.1-.1"></svg:path>`,
})
export class MdiAccountTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountTagOutlineIcon],svg[mdi-account-tag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.4 16c-.3 0-.6-.3-.6-.6s.3-.6.6-.6s.6.3.6.6s-.3.6-.6.6m6.4 1.8l-3.6-3.6c-.2-.1-.4-.2-.6-.2h-2.8c-.4 0-.8.4-.8.8v2.8c0 .2.1.4.2.6l3.6 3.6c.1.1.3.2.6.2s.4-.1.6-.2l2.8-2.8c.1-.1.2-.3.2-.6c0-.2-.1-.4-.2-.6M10 4C7.8 4 6 5.8 6 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 7c-2.7 0-8 1.3-8 4v3h11.2l-.4-.4c-.4-.4-.7-.9-.8-1.5H3.9V17c0-.6 3.1-2.1 6.1-2.1c.7 0 1.4.1 2 .2v-.3c0-.6.2-1.1.5-1.5c-.9-.2-1.8-.3-2.5-.3"></svg:path>`,
})
export class MdiAccountTagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountTieIcon],svg[mdi-account-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m4 10.54c0 1.06-.28 3.53-2.19 6.29L13 15l.94-1.88c-.62-.07-1.27-.12-1.94-.12s-1.32.05-1.94.12L11 15l-.81 4.83C8.28 17.07 8 14.6 8 13.54c-2.39.7-4 1.96-4 3.46v4h16v-4c0-1.5-1.6-2.76-4-3.46"></svg:path>`,
})
export class MdiAccountTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountTieHatIcon],svg[mdi-account-tie-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14.5c0 1.1-.3 3.5-2.2 6.3L13 16l.9-1.9c-.6 0-1.2-.1-1.9-.1s-1.3.1-1.9.1L11 16l-.8 4.8C8.3 18.1 8 15.6 8 14.5c-2.4.7-4 2-4 3.5v4h16v-4c0-1.5-1.6-2.8-4-3.5M6 4.5C6 3.1 8.7 2 12 2s6 1.1 6 2.5c0 .4-.2.7-.5 1c-.9-.9-3-1.5-5.5-1.5s-4.6.6-5.5 1.5c-.3-.3-.5-.6-.5-1m9.9 2.9c.1.2.1.4.1.6c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-.2 0-.4.1-.6c1 .4 2.4.6 3.9.6s2.9-.2 3.9-.6m.7-1.3c-1.1.5-2.7.9-4.6.9s-3.5-.4-4.6-.9C8.1 5.5 9.8 5 12 5s3.9.5 4.6 1.1"></svg:path>`,
})
export class MdiAccountTieHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountTieHatOutlineIcon],svg[mdi-account-tie-hat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5C6 3.1 8.7 2 12 2s6 1.1 6 2.5c0 .4-.2.7-.5 1c-.9-.9-3-1.5-5.5-1.5s-4.6.6-5.5 1.5c-.3-.3-.5-.6-.5-1m6 .5c-2.2 0-3.9.5-4.6 1.1c1.1.5 2.7.9 4.6.9s3.5-.4 4.6-.9C15.9 5.5 14.2 5 12 5m2 3c0 1.1-.9 2-2 2s-2-.9-2-2v-.1c-.7-.1-1.4-.2-2-.4V8c0 2.2 1.8 4 4 4s4-1.8 4-4c0-.2 0-.4-.1-.6c-.6.2-1.3.3-2 .4c.1.1.1.1.1.2m2.4 5.8l-.7 1.2l-.2.5c1.5.5 2.6 1.1 2.6 1.5v3.1h-4.2L13 15l.9-1.9c-.6 0-1.2-.1-1.9-.1s-1.3 0-1.9.1L11 15l-.9 5.1H5.9V17c0-.4 1.1-1 2.6-1.5l-.2-.5l-.6-1.2C5.7 14.4 4 15.5 4 17v5h16v-5c0-1.5-1.7-2.6-3.6-3.2"></svg:path>`,
})
export class MdiAccountTieHatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountTieOutlineIcon],svg[mdi-account-tie-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.36 12.76C18.31 13.42 20 14.5 20 16v5H4v-5c0-1.5 1.69-2.58 3.65-3.24L8.27 14l.23.5c-1.5.46-2.6 1.12-2.6 1.5v3.1h4.22l.88-5.07l-.94-1.88c.62-.07 1.27-.12 1.94-.12s1.32.05 1.94.12L13 14.03l.88 5.07h4.22V16c0-.38-1.1-1.04-2.6-1.5l.23-.5zM12 5c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></svg:path>`,
})
export class MdiAccountTieOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountTieVoiceIcon],svg[mdi-account-tie-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 4.36c2.02 2.2 2.02 5.25 0 7.27l-1.68-1.69c.84-1.18.84-2.71 0-3.89zM20.06 1c3.94 4.05 3.9 10.11 0 14l-1.63-1.63c2.77-3.18 2.77-7.72 0-10.74zM9 4c2.2 0 4 1.79 4 4s-1.8 4-4 4s-4-1.79-4-4s1.79-4 4-4m4 10.54c0 1.06-.29 3.53-2.2 6.29L10 16l.93-1.88C10.31 14.05 9.66 14 9 14s-1.33.05-1.95.12L8 16l-.82 4.83C5.27 18.07 5 15.6 5 14.54C2.6 15.24.994 16.5.994 18v4H17v-4c0-1.5-1.61-2.76-4-3.46"></svg:path>`,
})
export class MdiAccountTieVoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountTieVoiceOffIcon],svg[mdi-account-tie-voice-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.7 9.5L7.5 4.3c.46-.19.96-.3 1.5-.3c2.2 0 4 1.79 4 4c0 .53-.11 1.04-.3 1.5m4.05 2.13c2.02-2.02 2.02-5.07 0-7.27l-1.68 1.69c.84 1.18.84 2.71 0 3.89zM20.06 15c3.9-3.89 3.94-9.95 0-14l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74zM2.39 1.73L1.11 3l4.02 4c-.08.34-.13.66-.13 1c0 2.21 1.79 4 4 4c.33 0 .66-.06.97-.14L13 14.87c-.07 1.19-.46 3.45-2.2 5.96L10 16l.93-1.88C10.31 14.05 9.66 14 9 14c-.68 0-1.33.05-1.95.12L8 16l-.82 4.83C5.27 18.07 5 15.6 5 14.54C2.6 15.24.994 16.5.994 18v4H17v-3.12l3.84 3.85l1.27-1.27z"></svg:path>`,
})
export class MdiAccountTieVoiceOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountTieVoiceOffOutlineIcon],svg[mdi-account-tie-voice-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.22 6L7.5 4.3c.46-.19.97-.3 1.5-.3c2.21 0 4 1.79 4 4c0 .53-.11 1.04-.3 1.5L11 7.78A2.1 2.1 0 0 0 9.22 6m10.84 9c3.9-3.89 3.94-9.95 0-14l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74zm-3.31-3.37c2.02-2.02 2.02-5.07 0-7.27l-1.68 1.69c.84 1.18.84 2.71 0 3.89zM2.39 1.73L1.11 3l4.03 4.03C5.06 7.34 5 7.66 5 8c0 2.21 1.79 4 4 4c.34 0 .66-.06.97-.14l2.89 2.89l-.13.25l-.23.5c.8.24 1.47.55 1.94.83l.66.67v3.1h-4.22L10 15.03l.94-1.88c-.62-.07-1.27-.12-1.94-.12s-1.32.05-1.94.12L8 15.03l-.88 5.07H2.9V17c0-.38 1.1-1.04 2.6-1.5l-.23-.5l-.62-1.24C2.69 14.42 1 15.5 1 17v5h16v-3.11l3.84 3.84l1.27-1.27z"></svg:path>`,
})
export class MdiAccountTieVoiceOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountTieVoiceOutlineIcon],svg[mdi-account-tie-voice-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 4.36c2.02 2.2 2.02 5.25 0 7.27l-1.68-1.69c.84-1.18.84-2.71 0-3.89zM20.06 1c3.94 4.05 3.9 10.11 0 14l-1.63-1.63c2.77-3.18 2.77-7.72 0-10.74zm-6.7 12.76C15.31 14.42 17 15.5 17 17v5H1v-5c0-1.5 1.69-2.58 3.65-3.24L5.27 15l.23.5c-1.5.46-2.6 1.12-2.6 1.5v3.1h4.22L8 15.03l-.94-1.88c.62-.07 1.27-.12 1.94-.12s1.32.05 1.94.12L10 15.03l.88 5.07h4.22V17c0-.38-1.1-1.04-2.6-1.5l.23-.5zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></svg:path>`,
})
export class MdiAccountTieVoiceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountTieWomanIcon],svg[mdi-account-tie-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.94 3A3.993 3.993 0 0 0 8 7c-.06 1.64-.19 3.47-.97 4.59C9.71 13.22 12 13 12 13s2.29.22 4.97-1.41C16.12 10.22 15.94 8.54 16 7c0-2.21-1.79-4-4-4zM8.86 13.32C6 13.93 4 15.35 4 17v4h8l-3-4H6.5m5.5 4l1.78-7.19S13 14 12 14s-1.78-.19-1.78-.19M12 21h8v-4c0-1.65-2-3.07-4.86-3.68L17.5 17H15Z"></svg:path>`,
})
export class MdiAccountTieWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountVoiceIcon],svg[mdi-account-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c2.67 0 8 1.34 8 4v2H1v-2c0-2.66 5.33-4 8-4m7.76-9.64c2.02 2.2 2.02 5.25 0 7.27l-1.68-1.69c.84-1.18.84-2.71 0-3.89zM20.07 2c3.93 4.05 3.9 10.11 0 14l-1.63-1.63c2.77-3.18 2.77-7.72 0-10.74z"></svg:path>`,
})
export class MdiAccountVoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountVoiceOffIcon],svg[mdi-account-voice-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.27L3.28 2L22 20.72L20.73 22l-4-4c.17.31.27.64.27 1v2H1v-2c0-2.66 5.33-4 8-4c1.77 0 4.72.59 6.5 1.77l-4.38-4.38c-.62.39-1.34.61-2.12.61a4 4 0 0 1-4-4c0-.78.22-1.5.61-2.12zM9 5a4 4 0 0 1 4 4v.17L8.83 5zm7.76.36c2.02 2.2 2.02 5.25 0 7.27l-1.68-1.69c.84-1.18.84-2.71 0-3.89zM20.07 2c3.93 4.05 3.9 10.11 0 14l-1.63-1.63c2.77-3.18 2.77-7.72 0-10.74z"></svg:path>`,
})
export class MdiAccountVoiceOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountWrenchIcon],svg[mdi-account-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.9 21.2l-4.1-4.1c.4-1 .2-2.3-.7-3.1c-.9-.9-2.2-1.1-3.3-.6l1.9 1.9l-1.4 1.4l-2-2c-.5 1.1-.3 2.4.6 3.4c.9.9 2.1 1.1 3.1.7l4.1 4.1c.2.2.5.2.6 0l1-1c.3-.3.3-.6.2-.7M13 20H2v-2c0-2.2 3.6-4 8-4c.5 0 1 0 1.4.1c-.3.6-.4 1.2-.4 1.9c0 1.6.8 3.1 2 4M10 4C7.8 4 6 5.8 6 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4"></svg:path>`,
})
export class MdiAccountWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountWrenchOutlineIcon],svg[mdi-account-wrench-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.9 21.2l-4.1-4.1c.4-1 .2-2.3-.7-3.1c-.9-.9-2.2-1.1-3.3-.6l1.9 1.9l-1.4 1.4l-2-2c-.5 1.1-.3 2.4.6 3.4c.9.9 2.1 1.1 3.1.7l4.1 4.1c.2.2.5.2.6 0l1-1c.3-.3.3-.6.2-.7M10 12c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3 14H2v-3c0-2.7 5.3-4 8-4c.5 0 1.2.1 1.9.2c-.4.5-.6 1.1-.8 1.8c-.4 0-.7-.1-1.1-.1c-3 0-6.1 1.5-6.1 2.1v1.1h7.6c.3.8.9 1.4 1.5 1.9"></svg:path>`,
})
export class MdiAccountWrenchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccusoftIcon],svg[mdi-accusoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17.5 15.61c-.17-.24-7.97-10.21-8.23-10.53c-.27-.33-.19-.43-.14-.49c.09-.09.23-.09.8-.09c.33 0 3.66 0 4.01-.03c.72 0 .84.06.91.09c.08.02.28.19.41.36c.07.08 7.06 8.44 7.13 8.53c.07.09.2.24.28.39c.09.16.1.34-.03.41c-.08.05-3.94 1.64-4.05 1.68c-.09.07-.32.13-.48.11c-.11-.04-.34-.12-.61-.43m3.97-.19l.28.05s.93.18 1.02.2c.1.02.19.09.18.12c-.01.08-.05.12-.12.16c-.06.05-4.25 2.63-4.33 2.67c-.07.04-.17.1-.39.13c-.41.08-1.2-.14-1.45-.19c-.25-.06-10.51-2.33-10.6-2.36c-.09-.03-.15-.04-.16-.12c-.01-.14.21-.2.38-.27c.18-.06 5-1.81 5.17-1.88c.17-.07.39-.09.5-.1c.11-.01.78.1 1.08.14c.31.03 1.17.18 1.17.18l1.96 2.55c.34.39.56.55.84.58c.15.01.31-.03.42-.08c.08-.04 4.05-1.78 4.05-1.78M10.25 9.18l1.71 2.19l.04.08v.05c-.04.04-3.07 2.82-3.09 2.85L5.72 15.5s-.09.05-.14.08c-.05.03-.11.09-.08.24v.97l-3.94 1.25c-.19.06-.56.19-.61.15c-.07-.05.02-.16.05-.22c.06-.06 8.08-7.97 8.39-8.27c.45-.46.86-.52.86-.52" fill="currentColor"></svg:path>`,
})
export class MdiAccusoftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAdChoicesIcon],svg[mdi-ad-choices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9 9a1 1 0 1 1 0 2a1 1 0 0 1 0-2zM5 2c2 1 15 8.25 15 8.25s1.458.813 1.25 2c-.163.926-1.75 1.75-1.75 1.75l-9 5S8 20 8 18v-5s0-1 1-1s1 1 1 1v3.5l6.5-3.5s.813-.354.813-.854S16 11 16 11L6 5S4.5 4 4.5 6v12s.03 1.416.958.938c1.334-.688 1.647-.512 1.98.166c.52 1.063-.48 1.604-.48 1.604L4 22.25S2 23 2 21V4c0-3 3-2 3-2z" fill="currentColor"></svg:path>`,
})
export class MdiAdChoicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAdchoicesIcon],svg[mdi-adchoices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9 9a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M5 2c2 1 15 8.25 15 8.25s1.46.81 1.25 2c-.16.93-1.75 1.75-1.75 1.75l-9 5S8 20 8 18v-5s0-1 1-1s1 1 1 1v3.5l6.5-3.5s.81-.35.81-.85S16 11 16 11L6 5S4.5 4 4.5 6v12s.03 1.42.96.94c1.33-.69 1.65-.51 1.98.16c.52 1.07-.48 1.61-.48 1.61L4 22.25S2 23 2 21V4c0-3 3-2 3-2z" fill="currentColor"></svg:path>`,
})
export class MdiAdchoicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAdjustIcon],svg[mdi-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m3-8a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3"></svg:path>`,
})
export class MdiAdjustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAdobeIcon],svg[mdi-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14.58 3H22v16.67L14.58 3M9.42 3H2v16.67L9.42 3M12 9.17l4.67 10.5H13.5l-1.33-3.34H8.75L12 9.17z" fill="currentColor"></svg:path>`,
})
export class MdiAdobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAdvertisementsIcon],svg[mdi-advertisements-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2v2h-4v2h4c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2V9h4V7zM9 7v10h4c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm2 2h2v6h-2zM3 7c-1.1 0-2 .9-2 2v8h2v-4h2v4h2V9c0-1.1-.9-2-2-2zm0 2h2v2H3z"></svg:path>`,
})
export class MdiAdvertisementsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAdvertisementsOffIcon],svg[mdi-advertisements-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.2 9l-2-2H13c1.1 0 2 .9 2 2v2.8l-2-2V9zM23 9V7h-4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2v2h-2.8l2 2h.8c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2V9zm-.9 12.5l-1.3 1.3l-6.4-6.4c-.3.3-.8.6-1.4.6H9v-6.1l-2-2V17H5v-4H3v4H1V9c0-1.1.9-2 2-2h2.1l-4-4l1.3-1.3zM5 9H3v2h2zm8 5.9l-2-2V15h2z"></svg:path>`,
})
export class MdiAdvertisementsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirConditionerIcon],svg[mdi-air-conditioner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.59.66c2.34-1.81 4.88.4 5.45 3.84c.43 0 .85.12 1.23.34c.52-.6.98-1.42.8-2.34c-.42-2.15 1.99-3.89 4.28-.92c1.81 2.34-.4 4.88-3.85 5.45c0 .43-.11.86-.34 1.24c.6.51 1.42.97 2.34.79c2.13-.42 3.88 1.98.91 4.28c-2.34 1.81-4.88-.4-5.45-3.84c-.43 0-.85-.13-1.22-.35c-.52.6-.99 1.43-.81 2.35c.42 2.14-1.99 3.89-4.28.92c-1.82-2.35.4-4.89 3.85-5.45c0-.43.13-.85.35-1.23c-.6-.51-1.42-.98-2.35-.8c-2.13.42-3.88-1.98-.91-4.28M5 16h2a2 2 0 0 1 2 2v6H7v-2H5v2H3v-6a2 2 0 0 1 2-2m0 2v2h2v-2zm7.93-2H15l-2.93 8H10zM18 16h3v2h-3v4h3v2h-3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAirConditionerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirFilterIcon],svg[mdi-air-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18.31V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3.7c-.46-.18-1.05-.3-2-.3a1 1 0 0 1-1-1a1 1 0 0 1 1-1c.82 0 1.47.08 2 .21V12.3c-.46-.18-1.05-.3-2-.3a1 1 0 0 1-1-1a1 1 0 0 1 1-1c.82 0 1.47.08 2 .21V8.3C4.54 8.12 3.95 8 3 8a1 1 0 0 1-1-1a1 1 0 0 1 1-1c.82 0 1.47.08 2 .21V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.16c1.78.31 2.54.97 2.71 1.13c.39.39.39 1.03 0 1.42s-.91.38-1.42 0c0 0-1.04-.71-3.29-.71c-1.26 0-2.09.41-3.05.9c-1.04.51-2.21 1.1-3.95 1.1c-.36 0-.69 0-1-.04V7.95c.3.05.63.05 1 .05c1.26 0 2.09-.41 3.05-.89C14.09 6.59 15.27 6 17 6V4H7v16h10v-2c1.5 0 1.97.29 2 .31M17 10c-1.73 0-2.91.59-3.95 1.11c-.96.48-1.79.89-3.05.89c-.37 0-.7 0-1-.05v2.01c.31.04.64.04 1 .04c1.74 0 2.91-.59 3.95-1.1c.96-.48 1.79-.9 3.05-.9c2.25 0 3.29.71 3.29.71c.51.39 1.03.39 1.42 0s.39-1.02 0-1.42C21.5 11.08 20.25 10 17 10m0 4c-1.73 0-2.91.59-3.95 1.11c-.96.48-1.79.89-3.05.89c-.37 0-.7 0-1-.05v2.01c.31.04.64.04 1 .04c1.74 0 2.91-.59 3.95-1.1c.96-.48 1.79-.9 3.05-.9c2.25 0 3.29.71 3.29.71c.51.39 1.03.39 1.42 0s.39-1.02 0-1.42C21.5 15.08 20.25 14 17 14"></svg:path>`,
})
export class MdiAirFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirHornIcon],svg[mdi-air-horn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2.8v6.4c0 .3-.3.6-.6.5c0 0-3.9-2.6-8.4-2.6v2.4h.2c.5 0 1 .2 1.2.6l1.3 1.8c.2.2.3.5.3.7v8c0 .7-.7 1.4-1.5 1.4h-5c-.8 0-1.5-.6-1.5-1.4v-8c0-.3.1-.5.3-.7l1.3-1.8q.45-.6 1.2-.6H8V8c-.4.5-1 .8-1.6.8C5.1 8.8 4 7.5 4 6s1.1-2.8 2.4-2.8c.6.1 1.2.4 1.6.8V2.6h2V5c4.5 0 8.4-2.6 8.4-2.6c.3-.1.6.1.6.4"></svg:path>`,
})
export class MdiAirHornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirHumidifierIcon],svg[mdi-air-humidifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2M7 4h7c2.21 0 4 1.79 4 4v1h-2V8a2 2 0 0 0-2-2H7c-1.1 0-2 .9-2 2v12h11v-2h2v4H3V8c0-2.21 1.79-4 4-4m12 6.5s2 2.17 2 3.5c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.33 2-3.5 2-3.5"></svg:path>`,
})
export class MdiAirHumidifierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirHumidifierOffIcon],svg[mdi-air-humidifier-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l2.7 2.7C3.3 6.3 3 7.1 3 8v14h15v-2.1l2.8 2.8zm-12.5-10l2.8 2.8c-.3.4-.8.7-1.4.7c-1.1 0-2-.9-2-2c0-.6.3-1.1.6-1.5m6.4 6.4V20H5V8c0-.3.1-.6.2-.9l3 3C7.5 10.8 7 11.9 7 13c0 2.2 1.8 4 4 4c1.1 0 2.2-.5 2.9-1.2zm1-4.1c.1-1.3 2-3.3 2-3.3s2 2.2 2 3.5c0 1-.8 1.9-1.8 2zM9.2 6l-2-2H14c2.2 0 4 1.8 4 4v1h-2V8c0-1.1-.9-2-2-2z"></svg:path>`,
})
export class MdiAirHumidifierOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirPurifierIcon],svg[mdi-air-purifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M7 4h7a4 4 0 0 1 4 4v1h-2V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12h11v-2h2v4H3V8a4 4 0 0 1 4-4m9 7c2.5 0 2.5-2 5-2v2c-2.5 0-2.5 2-5 2zm0 4c2.5 0 2.5-2 5-2v2c-2.5 0-2.5 2-5 2z"></svg:path>`,
})
export class MdiAirPurifierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirPurifierOffIcon],svg[mdi-air-purifier-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11c-2.4 0-2.5 1.9-4.8 2l-.2-.2V11c2.5 0 2.5-2 5-2zm1.1 10.5l-1.3 1.3l-2.8-2.9V22H3V8c0-.9.3-1.7.8-2.3L1.1 3l1.3-1.3zM9 13c0 1.1.9 2 2 2c.6 0 1.1-.3 1.5-.6l-2.8-2.8c-.4.3-.7.8-.7 1.4m7 4.9l-2.1-2.1c-.7.7-1.8 1.2-2.9 1.2c-2.2 0-4-1.8-4-4c0-1.1.5-2.2 1.2-2.9l-3-3c-.1.3-.2.6-.2.9v12h11zm5-2.9v-2c-1.7 0-2.3 1-3.3 1.5l1.1 1.1c.6-.3 1.2-.6 2.2-.6m-7-9c1.1 0 2 .9 2 2v1h2V8c0-2.2-1.8-4-4-4H7.2l2 2z"></svg:path>`,
})
export class MdiAirPurifierOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirbagIcon],svg[mdi-airbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5m-3.54 7.55L13 18.03l-2 .02l-3.5 3.53L6 20.09zM17 2c1.08 0 2 .88 2 2c0 1.08-.88 2-2 2c-1.08 0-2-.88-2-2c0-1.08.89-2 2-2m-2.59 13h-2.82l5.7 5.71l1.42-1.42zm.71-.71l4.29 4.3l.22.21c.23-.38.37-.8.37-1.3v-8A2.5 2.5 0 0 0 17.5 7A2.5 2.5 0 0 0 15 9.5v4.67z"></svg:path>`,
})
export class MdiAirbagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirballoonIcon],svg[mdi-airballoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 23a2 2 0 0 1-2-2v-2h6v2a2 2 0 0 1-2 2zm1-22c.71 0 1.39.09 2.05.26C15.22 2.83 16 5.71 16 9c0 2.28-.38 4.37-1 7a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2c-.62-2.63-1-4.72-1-7c0-3.29.78-6.17 1.95-7.74C10.61 1.09 11.29 1 12 1m8 7c0 3.18-1.85 7.92-4.54 9.21C16.41 15.39 17 11.83 17 9s-.59-5.39-1.54-7.21C18.15 3.08 20 4.82 20 8M4 8c0-3.18 1.85-4.92 4.54-6.21C7.59 3.61 7 6.17 7 9s.59 6.39 1.54 8.21C5.85 15.92 4 11.18 4 8"></svg:path>`,
})
export class MdiAirballoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirballoonOutlineIcon],svg[mdi-airballoon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 23c-1.1 0-2-.9-2-2v-2h6v2c0 1.1-.9 2-2 2zm1-20c.28 0 .55 0 .81.05C13.42 4.22 14 6.26 14 9c0 2.1-1 7-1 7h-2s-1-4.9-1-7c0-2.74.58-4.78 1.19-5.95c.26-.05.53-.05.81-.05m0-2c-.71 0-1.39.09-2.05.26C8.78 2.83 8 5.71 8 9c0 2.28.38 4.37 1 7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2c.62-2.63 1-4.72 1-7c0-3.29-.78-6.17-1.95-7.74C13.39 1.09 12.71 1 12 1M4 8c0 3.18 1.85 7.92 4.54 9.21c-.54-1-.93-2.54-1.2-4.21C6.55 11.53 6 9.62 6 8c0-1.34.44-2.33 1.47-3.2c.26-1.13.62-2.15 1.07-3.01C5.85 3.08 4 4.82 4 8m11.46-6.21c.45.86.81 1.88 1.07 3.01C17.56 5.67 18 6.66 18 8c0 1.62-.55 3.53-1.34 5c-.27 1.67-.66 3.21-1.2 4.21C18.15 15.92 20 11.18 20 8s-1.85-4.92-4.54-6.21"></svg:path>`,
})
export class MdiAirballoonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneIcon],svg[mdi-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.56 3.91c.59.59.59 1.54 0 2.12l-3.89 3.89l2.12 9.19l-1.41 1.42l-3.88-7.43L9.6 17l.36 2.47l-1.07 1.06l-1.76-3.18l-3.19-1.77L5 14.5l2.5.37L11.37 11L3.94 7.09l1.42-1.41l9.19 2.12l3.89-3.89c.56-.58 1.56-.58 2.12 0"></svg:path>`,
})
export class MdiAirplaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneAlertIcon],svg[mdi-airplane-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.56 3.91c.59.59.59 1.54 0 2.12l-3.89 3.89l2.12 9.19l-1.41 1.42l-3.88-7.43L6.6 17l.36 2.47l-1.07 1.06l-1.76-3.18l-3.186-1.77L2 14.5l2.5.37L8.37 11L.944 7.09L2.36 5.68l9.19 2.12l3.89-3.89c.56-.58 1.56-.58 2.12 0M20 7v6h2V7zm0 10h2v-2h-2z"></svg:path>`,
})
export class MdiAirplaneAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneCheckIcon],svg[mdi-airplane-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.97 13.83A5.9 5.9 0 0 0 13.82 16l-2.27-4.37l-3.89 3.87L8 18l-1.05 1.06l-1.77-3.19L2 14.11l1.06-1.06l2.48.35l3.89-3.9L2 5.62l1.41-1.41l9.2 2.12l3.89-3.89a1.49 1.49 0 0 1 2.12 0c.58.59.58 1.56 0 2.12l-3.89 3.89zm5.37 2.01l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiAirplaneCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneClockIcon],svg[mdi-airplane-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9c-.91 0-1.77.18-2.57.5l-.7-3.05l3.89-3.89c.58-.56.58-1.53 0-2.12s-1.54-.586-2.12 0l-3.89 3.89l-9.2-2.12L0 3.62L7.43 7.5l-3.89 3.9l-2.48-.35L0 12.11l3.18 1.76l1.77 3.19L6 16l-.34-2.5l3.89-3.87l1.02 1.96A6.995 6.995 0 0 0 16 23c3.87 0 7-3.13 7-7s-3.13-7-7-7m0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m.5-4.75V12H15v5l3.61 2.16l.75-1.22z"></svg:path>`,
})
export class MdiAirplaneClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneCogIcon],svg[mdi-airplane-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.73 12.81c-.97.52-1.81 1.26-2.44 2.15l-1.74-3.33l-3.89 3.87L8 18l-1.05 1.06l-1.77-3.19L2 14.11l1.06-1.06l2.48.35l3.89-3.9L2 5.62l1.41-1.41l9.2 2.12l3.89-3.89a1.49 1.49 0 0 1 2.12 0c.58.59.58 1.56 0 2.12l-3.89 3.89zm8.07 7.59c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiAirplaneCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneEditIcon],svg[mdi-airplane-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.55 11.63L7.66 15.5L8 18l-1.05 1.06l-1.77-3.19L2 14.11l1.06-1.06l2.48.35l3.89-3.9L2 5.62l1.41-1.41l9.2 2.12l3.89-3.89a1.49 1.49 0 0 1 2.12 0c.58.59.58 1.56 0 2.12l-3.89 3.89l1.3 5.65l-2.09 2.09zM13 19.96V22h2.04l6.13-6.12l-2.04-2.05zm9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"></svg:path>`,
})
export class MdiAirplaneEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneLandingIcon],svg[mdi-airplane-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16l5.31 1.42c.8.21 1.62-.26 1.84-1.06c.21-.79-.26-1.62-1.06-1.84l-5.31-1.42l-2.76-9.03l-1.93-.5v8.28L5.15 8.95l-.93-2.32l-1.45-.39v5.17l1.6.43z"></svg:path>`,
})
export class MdiAirplaneLandingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneMarkerIcon],svg[mdi-airplane-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.33 11.05a5.53 5.53 0 0 0-2.24 3.53l-1.54-2.95l-3.89 3.87L8 18l-1.05 1.06l-1.77-3.19L2 14.11l1.06-1.06l2.48.35l3.89-3.9L2 5.62l1.41-1.41l9.2 2.12l3.89-3.89a1.49 1.49 0 0 1 2.12 0c.58.59.58 1.56 0 2.12l-3.89 3.89zM22 15.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiAirplaneMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneMinusIcon],svg[mdi-airplane-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.97 13.83A5.9 5.9 0 0 0 13.82 16l-2.27-4.37l-3.89 3.87L8 18l-1.05 1.06l-1.77-3.19L2 14.11l1.06-1.06l2.48.35l3.89-3.9L2 5.62l1.41-1.41l9.2 2.12l3.89-3.89a1.49 1.49 0 0 1 2.12 0c.58.59.58 1.56 0 2.12l-3.89 3.89zM15 18v2h8v-2z"></svg:path>`,
})
export class MdiAirplaneMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneOffIcon],svg[mdi-airplane-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L18 19.9l-.62.63L16 17.89l-3.65-3.65L9.6 17l.36 2.47l-1.07 1.06l-1.76-3.18l-3.19-1.77L5 14.5l2.5.37l2.73-2.75L6.59 8.5L3.94 7.09l.63-.63L1.11 3l1.28-1.27l19.72 19.73zM16.67 9.92l3.89-3.89c.59-.58.59-1.53 0-2.12s-1.56-.58-2.12 0L14.55 7.8L9.94 6.74l7.8 7.8z"></svg:path>`,
})
export class MdiAirplaneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplanePlusIcon],svg[mdi-airplane-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.97 13.83A5.9 5.9 0 0 0 13.82 16l-2.27-4.37l-3.89 3.87L8 18l-1.05 1.06l-1.77-3.19L2 14.11l1.06-1.06l2.48.35l3.89-3.9L2 5.62l1.41-1.41l9.2 2.12l3.89-3.89a1.49 1.49 0 0 1 2.12 0c.58.59.58 1.56 0 2.12l-3.89 3.89zM20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiAirplanePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneRemoveIcon],svg[mdi-airplane-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.97 13.83A5.9 5.9 0 0 0 13.82 16l-2.27-4.37l-3.89 3.87L8 18l-1.05 1.06l-1.77-3.19L2 14.11l1.06-1.06l2.48.35l3.89-3.9L2 5.62l1.41-1.41l9.2 2.12l3.89-3.89a1.49 1.49 0 0 1 2.12 0c.58.59.58 1.56 0 2.12l-3.89 3.89zm6.57 3.05l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiAirplaneRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneSearchIcon],svg[mdi-airplane-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.55 9.63l1.35 2.59c.6-1.05 1.51-1.91 2.6-2.48l-.77-3.29l3.89-3.89c.58-.59.58-1.56 0-2.122s-1.54-.586-2.12 0L10.61 4.33l-9.2-2.12L0 3.62L7.43 7.5l-3.89 3.9l-2.48-.35L0 12.11l3.18 1.76l1.77 3.19L6 16l-.34-2.5zM16.5 11c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L22 22.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class MdiAirplaneSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneSettingsIcon],svg[mdi-airplane-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.09 4.56L16.2 8.45l2.12 9.19l-1.41 1.42L13 11.63L9.13 15.5L9.5 18l-1.08 1.06l-1.77-3.19l-3.18-1.76l1.06-1.07L7 13.4l3.9-3.9l-7.43-3.88l1.42-1.41l9.19 2.12l3.89-3.89a1.49 1.49 0 0 1 2.12 0c.59.56.59 1.53 0 2.12M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z"></svg:path>`,
})
export class MdiAirplaneSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneTakeoffIcon],svg[mdi-airplane-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10L8 3.57l-1.91.51l4.14 7.17l-4.97 1.33l-1.97-1.54l-1.45.39l1.82 3.16l.77 1.33l1.6-.42l5.31-1.43l4.35-1.16L21 11.5c.81-.24 1.28-1.06 1.07-1.86"></svg:path>`,
})
export class MdiAirplaneTakeoffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAirportIcon],svg[mdi-airport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.97 5.92a.967.967 0 0 0-1.18-.68l-3.4.91l-4.44-4.12l-1.23.33l2.66 4.59l-3.19.85l-1.26-.98l-.93.25l1.66 2.88l10.62-2.84c.52-.15.82-.68.69-1.19M21 10l-1 2h-5l-1-2l1-1h2V7h1v2h2zm1 10v2H2v-2h13v-7h5v7z"></svg:path>`,
})
export class MdiAirportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmIcon],svg[mdi-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m0-16a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m.5 4H11v6l4.75 2.85l.75-1.23l-4-2.37zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53zM22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86z"></svg:path>`,
})
export class MdiAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmBellIcon],svg[mdi-alarm-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18.66V22H5v-3.34a9.98 9.98 0 0 0 10 0M22 4a2 2 0 0 0-2-2c-.31 0-.61.07-.88.21c-.3.15-.56.37-.76.64A1.997 1.997 0 0 0 20 6h.24c1.73 4.43.42 9.46-3.24 12.5c-.32.25-.65.5-1 .72V21h1v-1.26c3.14-2.24 5-5.88 5-9.74c0-1.5-.28-3-.83-4.38c.52-.38.83-.98.83-1.62m-4 6a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class MdiAlarmBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmCheckIcon],svg[mdi-alarm-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.54 14.53L8.41 12.4l-1.06 1.06l3.18 3.18l6-6l-1.06-1.06zM12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m0-16a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m-4.12-.61L6.6 1.86L2 5.71l1.29 1.53zM22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86z"></svg:path>`,
})
export class MdiAlarmCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmLightIcon],svg[mdi-alarm-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6.9L3.87 4.78l1.41-1.41L7.4 5.5zM13 1v3h-2V1zm7.13 3.78L18 6.9l-1.4-1.4l2.12-2.13zM4.5 10.5v2h-3v-2zm15 0h3v2h-3zM6 20h12a2 2 0 0 1 2 2H4a2 2 0 0 1 2-2m6-15a6 6 0 0 1 6 6v8H6v-8a6 6 0 0 1 6-6"></svg:path>`,
})
export class MdiAlarmLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmLightOffIcon],svg[mdi-alarm-light-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 14.8l-9-9c.9-.5 1.9-.8 3-.8c3.3 0 6 2.7 6 6zm2.1-10l-1.4-1.4l-2.1 2.1L18 6.9zm-.6 5.7v2h3v-2zm-15 0h-3v2h3zM1.1 3l5.5 5.5c-.4.7-.6 1.6-.6 2.5v8h11.1l1 1H6c-1.1 0-2 .9-2 2h16.1l.7.7l1.3-1.3L2.4 1.7zM13 1h-2v3h2z"></svg:path>`,
})
export class MdiAlarmLightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmLightOffOutlineIcon],svg[mdi-alarm-light-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7.3L9 5.8c.9-.5 1.9-.8 3-.8c3.3 0 6 2.7 6 6v3.8l-2-2V11c0-2.2-1.8-4-4-4q-.75 0-1.5.3m9.6-2.5l-1.4-1.4l-2.1 2.1L18 6.9zm-.6 5.7v2h3v-2zm-15 0h-3v2h3zM2.4 1.7l19.7 19.7l-1.3 1.3l-.7-.7H4c0-1.1.9-2 2-2h12.1l-1-1H6v-8c0-.9.2-1.8.6-2.5L1.1 3zM8 17h7.1l-7-7c0 .3-.1.7-.1 1zm5-16h-2v3h2z"></svg:path>`,
})
export class MdiAlarmLightOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmLightOutlineIcon],svg[mdi-alarm-light-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6.9L3.87 4.78l1.41-1.41L7.4 5.5zM13 1v3h-2V1zm7.13 3.78L18 6.9l-1.4-1.4l2.12-2.13zM4.5 10.5v2h-3v-2zm15 0h3v2h-3zM6 20h12a2 2 0 0 1 2 2H4a2 2 0 0 1 2-2m6-15a6 6 0 0 1 6 6v8H6v-8a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4v6h8v-6a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiAlarmLightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmMultipleIcon],svg[mdi-alarm-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.29 3.25L5.16 6.72L4 5.34l4.14-3.47zM22 5.35l-1.16 1.38l-4.14-3.48l1.16-1.38zM13 4a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m-1 1.5h1.5v4.53l3.22 1.47l-.62 1.36L12 13zM1 14c0-2.5 1.13-4.7 2.91-6.17A10 10 0 0 0 3 12l.06 1.13L3 14c0 2.28 1.27 4.26 3.14 5.28c1.3 1.22 2.93 2.11 4.75 2.5c-.61.14-1.24.22-1.89.22a8 8 0 0 1-8-8"></svg:path>`,
})
export class MdiAlarmMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmNoteIcon],svg[mdi-alarm-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.4 1.86l-1.29 1.53l4.6 3.86L22 5.72zm-10.8 0L2 5.71l1.29 1.53l4.59-3.85zM12 4a9 9 0 0 0-9 9a9 9 0 0 0 9 9c.33 0 .67 0 1-.06v-2c-.33.06-.67.06-1 .06a7 7 0 0 1-7-7a7 7 0 0 1 7-7c3.1 0 5.83 2.03 6.71 5h2.07C19.85 6.9 16.2 4 12 4m11 11h-3v5.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5c.54 0 1.07.18 1.5.5V13h4zM11.5 8v5.25l-4 2.37l.75 1.23L13 14V8z"></svg:path>`,
})
export class MdiAlarmNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmNoteOffIcon],svg[mdi-alarm-note-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13v2.8l1 1V15h3v-2zM2.38 1.73L1.11 3L3 4.88l-1 .83l1.29 1.53l1.12-.94l.8.8c-3.26 3.75-2.86 9.44.9 12.7A8.96 8.96 0 0 0 12 22c.33 0 .67 0 1-.06v-2c-.33.06-.67.06-1 .06a7 7 0 0 1-7-7c0-1.64.57-3.23 1.63-4.5l4.78 4.8l-3.91 2.32l.75 1.23l4.19-2.52l3.94 3.94a2.5 2.5 0 0 0-1.13 3.35a2.5 2.5 0 0 0 3.35 1.13c.49-.25.9-.64 1.13-1.13l1.11 1.11l1.27-1.27zM12 6c3.1 0 5.83 2.03 6.71 5h2.07C19.85 6.9 16.2 4 12 4c-1.35 0-2.69.3-3.9.9l1.52 1.52C10.38 6.14 11.19 6 12 6m-.5 2.3L13 9.8V8h-1.5zM7.88 3.39L6.6 1.86l-.84.7L7.18 4zm9.52-1.53l-1.29 1.53l4.6 3.86L22 5.72z"></svg:path>`,
})
export class MdiAlarmNoteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmOffIcon],svg[mdi-alarm-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.28L6.6 1.86l-.86.71L7.16 4m9.31 14.39C15.26 19.39 13.7 20 12 20a7 7 0 0 1-7-7c0-1.7.61-3.26 1.61-4.47M2.92 2.29L1.65 3.57L3 4.9l-1.13.93l1.42 1.42l1.11-.94l.8.8A8.96 8.96 0 0 0 3 13a9 9 0 0 0 9 9c2.25 0 4.31-.83 5.89-2.2l2.2 2.2l1.27-1.27L3.89 3.27zM22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86zM12 6a7 7 0 0 1 7 7c0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92a9 9 0 0 0-9-9c-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6"></svg:path>`,
})
export class MdiAlarmOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmPanelIcon],svg[mdi-alarm-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8 19H5v-2h3zm0-3H5v-2h3zm0-3H5v-2h3zm5.5 6h-3v-2h3zm0-3h-3v-2h3zm0-3h-3v-2h3zm5.5 6h-3v-2h3zm0-3h-3v-2h3zm0-3h-3v-2h3zm0-4H5V5h14z"></svg:path>`,
})
export class MdiAlarmPanelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmPanelOutlineIcon],svg[mdi-alarm-panel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12H6v-2h3zm4.5-2h-3v2h3zm4.5 0h-3v2h3zm0-4H6v3h12zm2-1H4v14h16zm0-2c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zM9 13H6v2h3zm4.5 0h-3v2h3zm4.5 0h-3v2h3zm-9 3H6v2h3zm4.5 0h-3v2h3zm4.5 0h-3v2h3z"></svg:path>`,
})
export class MdiAlarmPanelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmPlusIcon],svg[mdi-alarm-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3m-1 8a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m0-16a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m10 1.72l-4.6-3.86l-1.29 1.53l4.6 3.86M7.88 3.39L6.6 1.86L2 5.71l1.29 1.53z"></svg:path>`,
})
export class MdiAlarmPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmSnoozeIcon],svg[mdi-alarm-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.88 3.39L6.6 1.86L2 5.71l1.29 1.53zM22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86zM12 4a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m0 16a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9z"></svg:path>`,
})
export class MdiAlarmSnoozeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlbumIcon],svg[mdi-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m0 5.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5s-2 4.5-4.5 4.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertIcon],svg[mdi-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2z"></svg:path>`,
})
export class MdiAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertBoxIcon],svg[mdi-alert-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m8 10V7h-2v6zm0 4v-2h-2v2z"></svg:path>`,
})
export class MdiAlertBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertBoxOutlineIcon],svg[mdi-alert-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8 12h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiAlertBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertCircleIcon],svg[mdi-alert-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiAlertCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertCircleCheckIcon],svg[mdi-alert-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.75 22.16l-2.75-3L17.16 18l1.59 1.59L22.34 16l1.16 1.41zM13 13V7h-2v6zm0 4v-2h-2v2zM12 2c5.5 0 10 4.5 10 10l-.09 1.31A6.005 6.005 0 0 0 14 19c0 .95.22 1.85.62 2.65c-.84.23-1.71.35-2.62.35c-5.5 0-10-4.5-10-10S6.5 2 12 2"></svg:path>`,
})
export class MdiAlertCircleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertCircleCheckOutlineIcon],svg[mdi-alert-circle-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.75 22.16l-2.75-3L17.16 18l1.59 1.59L22.34 16l1.16 1.41zM11 15h2v2h-2zm0-8h2v6h-2zm1-5c5.5 0 10 4.5 10 10l-.08 1.31c-.61-.2-1.25-.31-1.98-.31l.06-1c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8c.71 0 1.39-.09 2.05-.26c.08.68.28 1.32.57 1.91c-.84.23-1.72.35-2.62.35c-5.53 0-10-4.5-10-10S6.47 2 12 2"></svg:path>`,
})
export class MdiAlertCircleCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertCircleOutlineIcon],svg[mdi-alert-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8"></svg:path>`,
})
export class MdiAlertCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertDecagramIcon],svg[mdi-alert-decagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68zm-10 5h-2v-2h2zm0-4h-2V7h2z"></svg:path>`,
})
export class MdiAlertDecagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertDecagramOutlineIcon],svg[mdi-alert-decagram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-2.44 2.78l.34 3.68l-3.61.82l-1.89 3.18L12 21l-3.4 1.47l-1.89-3.18l-3.61-.82l.34-3.69L1 12l2.44-2.79l-.34-3.68l3.61-.81L8.6 1.54L12 3l3.4-1.46l1.89 3.18l3.61.82l-.34 3.68zm-2.67 0L18.5 9.89l.24-2.79L16 6.5l-1.42-2.43L12 5.18L9.42 4.07L8 6.5l-2.74.59l.24 2.79L3.67 12l1.83 2.1l-.24 2.8l2.74.6l1.42 2.43L12 18.81l2.58 1.11L16 17.5l2.74-.61l-.24-2.79zM11 15h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiAlertDecagramOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertMinusIcon],svg[mdi-alert-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19c0-2.79 1.91-5.13 4.5-5.8L12 2L1 21h13.35c-.22-.63-.35-1.3-.35-2m-1-1h-2v-2h2zm0-4h-2v-4h2zm11 4v2h-8v-2z"></svg:path>`,
})
export class MdiAlertMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertMinusOutlineIcon],svg[mdi-alert-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.5h2v2h-2zm3 3.5v-.4H5.4L12 7.3l4.11 7.14c.51-.44 1.09-.79 1.73-1.03L12 3.3L2 20.6h12.22c-.14-.51-.22-1.04-.22-1.6m-1-8.5h-2v4h2zm3 7.5v2h8v-2z"></svg:path>`,
})
export class MdiAlertMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertOctagonIcon],svg[mdi-alert-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13h-2V7h2m-2 8h2v2h-2m4.73-14H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27z"></svg:path>`,
})
export class MdiAlertOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertOctagonOutlineIcon],svg[mdi-alert-octagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.27 3L3 8.27v7.46L8.27 21h7.46C17.5 19.24 21 15.73 21 15.73V8.27L15.73 3M9.1 5h5.8L19 9.1v5.8L14.9 19H9.1L5 14.9V9.1m6 5.9h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiAlertOctagonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertOctagramIcon],svg[mdi-alert-octagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68L20.12 12l1.68 4.06l-4.06 1.68l-1.68 4.06L12 20.12L7.94 21.8l-1.68-4.06zM13 17v-2h-2v2zm0-4V7h-2v6z"></svg:path>`,
})
export class MdiAlertOctagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertOctagramOutlineIcon],svg[mdi-alert-octagram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68L20.12 12l1.68 4.06l-4.06 1.68l-1.68 4.06L12 20.12L7.94 21.8l-1.68-4.06zM4.81 9l1.24 3l-1.24 3l2.98 1.21L9 19.19l3-1.24l3 1.24l1.21-2.98L19.19 15l-1.24-3l1.24-3l-2.98-1.21L15 4.81l-3 1.24l-3-1.24l-1.21 2.98zM11 15h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiAlertOctagramOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertOutlineIcon],svg[mdi-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"></svg:path>`,
})
export class MdiAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertPlusIcon],svg[mdi-alert-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19c0-2.79 1.91-5.13 4.5-5.8L12 2L1 21h13.35c-.22-.63-.35-1.3-.35-2m-1-1h-2v-2h2zm0-4h-2v-4h2zm8 1v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class MdiAlertPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertPlusOutlineIcon],svg[mdi-alert-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.5h2v2h-2zm3 3.5v-.4H5.4L12 7.3l4.11 7.14c.51-.44 1.09-.79 1.73-1.03L12 3.3L2 20.6h12.22c-.14-.51-.22-1.04-.22-1.6m-1-8.5h-2v4h2zm6 4.5v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiAlertPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertRemoveIcon],svg[mdi-alert-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19c0-2.79 1.91-5.13 4.5-5.8L12 2L1 21h13.35c-.22-.63-.35-1.3-.35-2m-1-1h-2v-2h2zm0-4h-2v-4h2zm10.54 2.88L21.41 19l2.13 2.12l-1.42 1.42L20 20.41l-2.12 2.13l-1.41-1.42L18.59 19l-2.12-2.12l1.41-1.41L20 17.59l2.12-2.13z"></svg:path>`,
})
export class MdiAlertRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertRemoveOutlineIcon],svg[mdi-alert-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.5h2v2h-2zm3 3.5v-.4H5.4L12 7.3l4.11 7.14c.51-.44 1.09-.79 1.73-1.03L12 3.3L2 20.6h12.22c-.14-.51-.22-1.04-.22-1.6m-1-8.5h-2v4h2zm9.12 4.96L20 17.59l-2.12-2.13l-1.41 1.42L18.59 19l-2.12 2.12l1.41 1.42L20 20.41l2.12 2.13l1.42-1.42L21.41 19l2.13-2.12z"></svg:path>`,
})
export class MdiAlertRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertRhombusIcon],svg[mdi-alert-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2m-1 5h2v6h-2zm0 8h2v2h-2z"></svg:path>`,
})
export class MdiAlertRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlertRhombusOutlineIcon],svg[mdi-alert-rhombus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2m0 2l8 8l-8 8l-8-8m7-5v6h2V7m-2 8v2h2v-2Z"></svg:path>`,
})
export class MdiAlertRhombusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlienIcon],svg[mdi-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.97 0 9 3.58 9 8s-6 10-9 10s-9-5.58-9-10s4.03-8 9-8m-1.69 7.93C9.29 9.29 7.47 8.58 6.25 9.34s-1.38 2.71-.36 4.35c1.03 1.64 2.85 2.35 4.07 1.59c1.22-.78 1.37-2.71.35-4.35m3.38 0c-1.02 1.64-.87 3.57.35 4.35c1.22.76 3.04.05 4.07-1.59c1.02-1.64.86-3.59-.36-4.35s-3.04-.05-4.06 1.59M12 17.75c-2 0-2.5-.75-2.5-.75c0 .03.5 2 2.5 2s2.5-2 2.5-2s-.5.75-2.5.75"></svg:path>`,
})
export class MdiAlienIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlienOutlineIcon],svg[mdi-alien-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.31 10.93c1.02 1.64.87 3.57-.35 4.35c-1.22.76-3.04.05-4.07-1.59c-1.02-1.64-.86-3.59.36-4.35s3.04-.05 4.06 1.59M12 17.75c2 0 2.5-.75 2.5-.75s-.5 2-2.5 2s-2.5-1.97-2.5-2c0 0 .5.75 2.5.75m5.75-8.41c1.22.76 1.38 2.71.36 4.35c-1.03 1.64-2.85 2.35-4.07 1.59c-1.22-.78-1.37-2.71-.35-4.35s2.84-2.35 4.06-1.59M12 20c2.5 0 8-5.14 8-9s-3.59-7-8-7s-8 3.14-8 7s5.5 9 8 9m0-18c5.5 0 10 4.04 10 9c0 4.08-5.68 11-10 11S2 15.08 2 11c0-4.96 4.5-9 10-9"></svg:path>`,
})
export class MdiAlienOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlignHorizontalCenterIcon],svg[mdi-align-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z"></svg:path>`,
})
export class MdiAlignHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlignHorizontalDistributeIcon],svg[mdi-align-horizontal-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22H2V2h2zM22 2h-2v20h2zm-8.5 5h-3v10h3z"></svg:path>`,
})
export class MdiAlignHorizontalDistributeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlignHorizontalLeftIcon],svg[mdi-align-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22H2V2h2zM22 7H6v3h16zm-6 7H6v3h10z"></svg:path>`,
})
export class MdiAlignHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlignHorizontalRightIcon],svg[mdi-align-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h2v20h-2zM2 10h16V7H2zm6 7h10v-3H8z"></svg:path>`,
})
export class MdiAlignHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlignVerticalBottomIcon],svg[mdi-align-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2v-2h20zM10 2H7v16h3zm7 6h-3v10h3z"></svg:path>`,
})
export class MdiAlignVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlignVerticalCenterIcon],svg[mdi-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h-5V6h-3v5h-4V3H7v8H1.8v2H7v8h3v-8h4v5h3v-5h5z"></svg:path>`,
})
export class MdiAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlignVerticalDistributeIcon],svg[mdi-align-vertical-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v2H2V2zM7 10.5v3h10v-3zM2 20v2h20v-2z"></svg:path>`,
})
export class MdiAlignVerticalDistributeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlignVerticalTopIcon],svg[mdi-align-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v2H2V2zM7 22h3V6H7zm7-6h3V6h-3z"></svg:path>`,
})
export class MdiAlignVerticalTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAllInclusiveIcon],svg[mdi-all-inclusive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L7.8 14.39c-.64.64-1.49.99-2.4.99C3.53 15.38 2 13.87 2 12s1.53-3.38 3.4-3.38c.91 0 1.76.35 2.44 1.03l1.13 1l1.53-1.34L9.22 8.2A5.37 5.37 0 0 0 5.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l7.03-6.24c.64-.64 1.49-.99 2.4-.99c1.87 0 3.4 1.51 3.4 3.38s-1.53 3.38-3.4 3.38c-.9 0-1.76-.35-2.44-1.03L15 13.34l-1.5 1.34l1.28 1.12a5.4 5.4 0 0 0 3.82 1.57c2.98 0 5.4-2.41 5.4-5.37c0-3-2.42-5.38-5.4-5.38"></svg:path>`,
})
export class MdiAllInclusiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAllInclusiveBoxIcon],svg[mdi-all-inclusive-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-2.9 12.9c-1.03 0-2.01-.4-2.75-1.14l-.64-.64l1.42-1.41l.63.63A1.897 1.897 0 0 0 18 12a1.9 1.9 0 0 0-1.9-1.9c-.5 0-.98.2-1.34.56l-4.11 4.1A3.85 3.85 0 0 1 7.9 15.9C5.75 15.9 4 14.15 4 12s1.75-3.9 3.9-3.9c1.04 0 2.01.4 2.75 1.14l.64.64l-1.42 1.42l-.63-.64c-.36-.36-.84-.56-1.34-.56a1.9 1.9 0 1 0 0 3.8c.5 0 .98-.2 1.34-.56l4.11-4.1A3.85 3.85 0 0 1 16.1 8.1c2.15 0 3.9 1.75 3.9 3.9s-1.75 3.9-3.9 3.9"></svg:path>`,
})
export class MdiAllInclusiveBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAllInclusiveBoxOutlineIcon],svg[mdi-all-inclusive-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12c0 1.84-1.5 3.34-3.34 3.34c-.89 0-1.72-.34-2.35-.98l-.6-.6l1.06-1.05c.27.29.6.59.6.59c.34.35.81.54 1.3.54c1.01 0 1.83-.84 1.83-1.84s-.82-1.84-1.83-1.84c-.49 0-.96.2-1.3.54l-3.67 3.66c-.63.64-1.47.98-2.36.98C6.5 15.34 5 13.84 5 12s1.5-3.34 3.34-3.34c.89 0 1.73.34 2.36.98l.59.6l-1.06 1.06l-.59-.6c-.35-.34-.81-.54-1.3-.54c-1.02 0-1.84.84-1.84 1.84s.82 1.84 1.84 1.84c.49 0 .95-.19 1.3-.54l3.67-3.66c.63-.64 1.46-.98 2.35-.98C17.5 8.66 19 10.16 19 12m2-7v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2m-2 0H5v14h14z"></svg:path>`,
})
export class MdiAllInclusiveBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAllergyIcon],svg[mdi-allergy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.75 5.33a1.25 1.25 0 0 0-1.25 1.25v4.59h-.83V4.08a1.25 1.25 0 0 0-2.5 0v7.09h-.84V3.25a1.25 1.25 0 1 0-2.5 0v7.92H11V5.33a1.25 1.25 0 0 0-2.5 0v9.93l-3.59-2a1 1 0 0 0-.5-.14a1 1 0 0 0-.66.25l-1.08 1L9.21 21a3.3 3.3 0 0 0 2.37 1h6.09A3.33 3.33 0 0 0 21 18.67V6.58a1.25 1.25 0 0 0-1.25-1.25M11 15a1 1 0 1 1 1-1a1 1 0 0 1-1 1m2 3a1 1 0 1 1 1-1a1 1 0 0 1-1 1m5-2a1 1 0 1 1 1-1a1 1 0 0 1-1 1m-1 3a1 1 0 1 1 1-1a1 1 0 0 1-1 1m-2-4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiAllergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlloIcon],svg[mdi-allo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.984 12v9c0 .5-.226.82-.68.96c-.452.142-.82.009-1.1-.398l-1.548-2.109c-1.875 1.688-4.093 2.531-6.656 2.531c-2.75 0-5.102-.976-7.055-2.93c-1.953-1.952-2.93-4.304-2.93-7.054s.977-5.102 2.93-7.055C6.898 2.992 9.25 2.015 12 2.015s5.102.977 7.055 2.93c1.953 1.953 2.93 4.305 2.93 7.055z" fill="currentColor"></svg:path>`,
})
export class MdiAlloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaIcon],svg[mdi-alpha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.08 17.8c-.46.13-.87.2-1.23.2c-1.2 0-2.01-.88-2.42-2.65h-.05c-.99 1.91-2.38 2.86-4.13 2.86c-1.31 0-2.36-.49-3.15-1.48S5.92 14.5 5.92 13c0-1.75.45-3.15 1.34-4.24s2.1-1.64 3.63-1.64c.82 0 1.56.23 2.2.68c.64.46 1.13 1.1 1.47 1.93h.04l.71-2.4h2.56l-2.14 5.32c.24 1.24.49 2.09.77 2.54c.24.45.58.68 1 .68c.24 0 .43-.04.6-.11zm-4.26-5.24c-.21-1.13-.55-2.01-1.01-2.61c-.45-.61-1-.91-1.63-.91c-.82 0-1.48.37-1.97 1.1c-.49.74-.71 1.65-.71 2.72c0 .98.19 1.79.62 2.45c.42.66.99.98 1.7.98c.6 0 1.15-.29 1.64-.84c.5-.57.91-1.4 1.24-2.49z"></svg:path>`,
})
export class MdiAlphaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaAIcon],svg[mdi-alpha-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2zm0 2h2v2h-2z"></svg:path>`,
})
export class MdiAlphaAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaABoxIcon],svg[mdi-alpha-a-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm8 2a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2zm0 2h2v2h-2z"></svg:path>`,
})
export class MdiAlphaABoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaABoxOutlineIcon],svg[mdi-alpha-a-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0v14h14V5zm6 2h2a2 2 0 0 1 2 2v8h-2v-4h-2v4H9V9a2 2 0 0 1 2-2m0 2v2h2V9z"></svg:path>`,
})
export class MdiAlphaABoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaACircleIcon],svg[mdi-alpha-a-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m-1 5a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2zm0 2h2v2h-2z"></svg:path>`,
})
export class MdiAlphaACircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaACircleOutlineIcon],svg[mdi-alpha-a-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h2a2 2 0 0 1 2 2v8h-2v-4h-2v4H9V9a2 2 0 0 1 2-2m0 2v2h2V9zm1 11a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaACircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaBIcon],svg[mdi-alpha-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10.5V9a2 2 0 0 0-2-2H9v10h4a2 2 0 0 0 2-2v-1.5c0-.8-.7-1.5-1.5-1.5c.8 0 1.5-.7 1.5-1.5M13 15h-2v-2h2zm0-4h-2V9h2z"></svg:path>`,
})
export class MdiAlphaBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaBBoxIcon],svg[mdi-alpha-b-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m10 7.5V9a2 2 0 0 0-2-2H9v10h4a2 2 0 0 0 2-2v-1.5c0-.8-.7-1.5-1.5-1.5c.8 0 1.5-.7 1.5-1.5M13 15h-2v-2h2zm0-4h-2V9h2z"></svg:path>`,
})
export class MdiAlphaBBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaBBoxOutlineIcon],svg[mdi-alpha-b-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10.5c0 .8-.7 1.5-1.5 1.5c.8 0 1.5.7 1.5 1.5V15a2 2 0 0 1-2 2H9V7h4a2 2 0 0 1 2 2zM13 15v-2h-2v2zm0-4V9h-2v2zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0v14h14V5z"></svg:path>`,
})
export class MdiAlphaBBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaBCircleIcon],svg[mdi-alpha-b-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m3 8.5V9a2 2 0 0 0-2-2H9v10h4a2 2 0 0 0 2-2v-1.5c0-.8-.7-1.5-1.5-1.5c.8 0 1.5-.7 1.5-1.5M13 15h-2v-2h2zm0-4h-2V9h2z"></svg:path>`,
})
export class MdiAlphaBCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaBCircleOutlineIcon],svg[mdi-alpha-b-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10.5c0 .8-.7 1.5-1.5 1.5c.8 0 1.5.7 1.5 1.5V15a2 2 0 0 1-2 2H9V7h4a2 2 0 0 1 2 2zM13 15v-2h-2v2zm0-4V9h-2v2zm-1-9a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaBCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaCIcon],svg[mdi-alpha-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h-2v1h-2V9h2v1h2V9a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiAlphaCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaCBoxIcon],svg[mdi-alpha-c-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m6 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h-2v1h-2V9h2v1h2V9a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiAlphaCBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaCBoxOutlineIcon],svg[mdi-alpha-c-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0v14h14V5zm6 2h2a2 2 0 0 1 2 2v1h-2V9h-2v6h2v-1h2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaCBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaCCircleIcon],svg[mdi-alpha-c-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m-1 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h-2v1h-2V9h2v1h2V9a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiAlphaCCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaCCircleOutlineIcon],svg[mdi-alpha-c-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h2a2 2 0 0 1 2 2v1h-2V9h-2v6h2v-1h2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m1-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaCCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaDIcon],svg[mdi-alpha-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm2 2h2v6h-2z"></svg:path>`,
})
export class MdiAlphaDIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaDBoxIcon],svg[mdi-alpha-d-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm2 2h2v6h-2zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaDBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaDBoxOutlineIcon],svg[mdi-alpha-d-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9zm2 2v6h2V9zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0v14h14V5z"></svg:path>`,
})
export class MdiAlphaDBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaDCircleIcon],svg[mdi-alpha-d-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2M9 7v10h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm2 2h2v6h-2z"></svg:path>`,
})
export class MdiAlphaDCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaDCircleOutlineIcon],svg[mdi-alpha-d-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9zm2 2v6h2V9zm1-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaDCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaEIcon],svg[mdi-alpha-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h6v-2h-4v-2h4v-2h-4V9h4V7z"></svg:path>`,
})
export class MdiAlphaEIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaEBoxIcon],svg[mdi-alpha-e-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h6v-2h-4v-2h4v-2h-4V9h4V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaEBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaEBoxOutlineIcon],svg[mdi-alpha-e-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h6v2h-4v2h4v2h-4v2h4v2H9zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0v14h14V5z"></svg:path>`,
})
export class MdiAlphaEBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaECircleIcon],svg[mdi-alpha-e-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2M9 7v10h6v-2h-4v-2h4v-2h-4V9h4V7z"></svg:path>`,
})
export class MdiAlphaECircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaECircleOutlineIcon],svg[mdi-alpha-e-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h6v2h-4v2h4v2h-4v2h4v2H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaECircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaFIcon],svg[mdi-alpha-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-4h3v-2h-3V9h4V7z"></svg:path>`,
})
export class MdiAlphaFIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaFBoxIcon],svg[mdi-alpha-f-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-4h3v-2h-3V9h4V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaFBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaFBoxOutlineIcon],svg[mdi-alpha-f-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h6v2h-4v2h3v2h-3v4H9zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0v14h14V5z"></svg:path>`,
})
export class MdiAlphaFBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaFCircleIcon],svg[mdi-alpha-f-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2M9 7v10h2v-4h3v-2h-3V9h4V7z"></svg:path>`,
})
export class MdiAlphaFCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaFCircleOutlineIcon],svg[mdi-alpha-f-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h6v2h-4v2h3v2h-3v4H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaFCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaGIcon],svg[mdi-alpha-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4h-2v4h-2V9h4V7z"></svg:path>`,
})
export class MdiAlphaGIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaGBoxIcon],svg[mdi-alpha-g-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4h-2v4h-2V9h4V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaGBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaGBoxOutlineIcon],svg[mdi-alpha-g-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h4v2h-4v6h2v-4h2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0v14h14V5z"></svg:path>`,
})
export class MdiAlphaGBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaGCircleIcon],svg[mdi-alpha-g-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m-1 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4h-2v4h-2V9h4V7z"></svg:path>`,
})
export class MdiAlphaGCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaGCircleOutlineIcon],svg[mdi-alpha-g-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h4v2h-4v6h2v-4h2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m1-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaGCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaHIcon],svg[mdi-alpha-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-4h2v4h2V7h-2v4h-2V7z"></svg:path>`,
})
export class MdiAlphaHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaHBoxIcon],svg[mdi-alpha-h-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-4h2v4h2V7h-2v4h-2V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaHBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaHBoxOutlineIcon],svg[mdi-alpha-h-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v4h2V7h2v10h-2v-4h-2v4H9zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0v14h14V5z"></svg:path>`,
})
export class MdiAlphaHBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaHCircleIcon],svg[mdi-alpha-h-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2M9 7v10h2v-4h2v4h2V7h-2v4h-2V7z"></svg:path>`,
})
export class MdiAlphaHCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaHCircleOutlineIcon],svg[mdi-alpha-h-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v4h2V7h2v10h-2v-4h-2v4H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaHCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaIIcon],svg[mdi-alpha-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7v2h-1v6h1v2h-4v-2h1V9h-1V7z"></svg:path>`,
})
export class MdiAlphaIIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaIBoxIcon],svg[mdi-alpha-i-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7h-4v2h1v6h-1v2h4v-2h-1V9h1zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaIBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaIBoxOutlineIcon],svg[mdi-alpha-i-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7v2h-1v6h1v2h-4v-2h1V9h-1V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaIBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaICircleIcon],svg[mdi-alpha-i-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m2 5h-4v2h1v6h-1v2h4v-2h-1V9h1z"></svg:path>`,
})
export class MdiAlphaICircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaICircleOutlineIcon],svg[mdi-alpha-i-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7v2h-1v6h1v2h-4v-2h1V9h-1V7zm-2-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaICircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaJIcon],svg[mdi-alpha-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7v8h-2v-1H9v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7z"></svg:path>`,
})
export class MdiAlphaJIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaJBoxIcon],svg[mdi-alpha-j-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7v8h-2v-1H9v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaJBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaJBoxOutlineIcon],svg[mdi-alpha-j-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1h2v1h2zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaJBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaJCircleIcon],svg[mdi-alpha-j-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m1 5v8h-2v-1H9v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7z"></svg:path>`,
})
export class MdiAlphaJCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaJCircleOutlineIcon],svg[mdi-alpha-j-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1h2v1h2zm-1-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaJCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaKIcon],svg[mdi-alpha-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-3.33L13 17h2l-3-5l3-5h-2l-2 3.33V7z"></svg:path>`,
})
export class MdiAlphaKIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaKBoxIcon],svg[mdi-alpha-k-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-3.33L13 17h2l-3-5l3-5h-2l-2 3.33V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaKBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaKBoxOutlineIcon],svg[mdi-alpha-k-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v3.33L13 7h2l-3 5l3 5h-2l-2-3.33V17H9zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaKBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaKCircleIcon],svg[mdi-alpha-k-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2M9 7v10h2v-3.33L13 17h2l-3-5l3-5h-2l-2 3.33V7z"></svg:path>`,
})
export class MdiAlphaKCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaKCircleOutlineIcon],svg[mdi-alpha-k-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v3.33L13 7h2l-3 5l3 5h-2l-2-3.33V17H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaKCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaLIcon],svg[mdi-alpha-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h6v-2h-4V7z"></svg:path>`,
})
export class MdiAlphaLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaLBoxIcon],svg[mdi-alpha-l-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h6v-2h-4V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaLBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaLBoxOutlineIcon],svg[mdi-alpha-l-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v8h4v2H9zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaLBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaLCircleIcon],svg[mdi-alpha-l-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h6v-2h-4V7zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaLCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaLCircleOutlineIcon],svg[mdi-alpha-l-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v8h4v2H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaLCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaMIcon],svg[mdi-alpha-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7a2 2 0 0 0-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiAlphaMIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaMBoxIcon],svg[mdi-alpha-m-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7a2 2 0 0 0-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaMBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaMBoxOutlineIcon],svg[mdi-alpha-m-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h6a2 2 0 0 1 2 2v8h-2V9h-2v7h-2V9H9v8H7V9a2 2 0 0 1 2-2M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaMBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaMCircleIcon],svg[mdi-alpha-m-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7a2 2 0 0 0-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaMCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaMCircleOutlineIcon],svg[mdi-alpha-m-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h6a2 2 0 0 1 2 2v8h-2V9h-2v7h-2V9H9v8H7V9a2 2 0 0 1 2-2m3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaMCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaNIcon],svg[mdi-alpha-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-5l2 5h2V7h-2v5l-2-5z"></svg:path>`,
})
export class MdiAlphaNIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaNBoxIcon],svg[mdi-alpha-n-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-5l2 5h2V7h-2v5l-2-5zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaNBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaNBoxOutlineIcon],svg[mdi-alpha-n-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2l2 5V7h2v10h-2l-2-5v5H9zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaNBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaNCircleIcon],svg[mdi-alpha-n-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-5l2 5h2V7h-2v5l-2-5zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaNCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaNCircleOutlineIcon],svg[mdi-alpha-n-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2l2 5V7h2v10h-2l-2-5v5H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaNCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaOIcon],svg[mdi-alpha-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2z"></svg:path>`,
})
export class MdiAlphaOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaOBoxIcon],svg[mdi-alpha-o-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaOBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaOBoxOutlineIcon],svg[mdi-alpha-o-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5zm6 2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m0 2v6h2V9z"></svg:path>`,
})
export class MdiAlphaOBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaOCircleIcon],svg[mdi-alpha-o-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2zm1-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaOCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaOCircleOutlineIcon],svg[mdi-alpha-o-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m0 2v6h2V9zm1-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaOCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaPIcon],svg[mdi-alpha-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm2 2h2v2h-2z"></svg:path>`,
})
export class MdiAlphaPIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaPBoxIcon],svg[mdi-alpha-p-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm2 2h2v2h-2zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaPBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaPBoxOutlineIcon],svg[mdi-alpha-p-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v4H9zm2 2v2h2V9zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaPBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaPCircleIcon],svg[mdi-alpha-p-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm2 2h2v2h-2zm1-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaPCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaPCircleOutlineIcon],svg[mdi-alpha-p-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v4H9zm2 2v2h2V9zm1-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaPCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaQIcon],svg[mdi-alpha-q-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v2h2v-2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2z"></svg:path>`,
})
export class MdiAlphaQIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaQBoxIcon],svg[mdi-alpha-q-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v2h2v-2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2zM5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaQBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaQBoxOutlineIcon],svg[mdi-alpha-q-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v14h14V6zm6 1h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2v2h-2v-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m0 2v6h2V9z"></svg:path>`,
})
export class MdiAlphaQBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaQCircleIcon],svg[mdi-alpha-q-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m-1 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v2h2v-2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2z"></svg:path>`,
})
export class MdiAlphaQCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaQCircleOutlineIcon],svg[mdi-alpha-q-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m-1 3h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2v2h-2v-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m0 2v6h2V9z"></svg:path>`,
})
export class MdiAlphaQCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaRIcon],svg[mdi-alpha-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-4h.8l1.2 4h2l-1.24-4.15C14.5 12.55 15 11.84 15 11V9a2 2 0 0 0-2-2zm2 2h2v2h-2z"></svg:path>`,
})
export class MdiAlphaRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaRBoxIcon],svg[mdi-alpha-r-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-4h.8l1.2 4h2l-1.24-4.15C14.5 12.55 15 11.84 15 11V9a2 2 0 0 0-2-2zm2 2h2v2h-2zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaRBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaRBoxOutlineIcon],svg[mdi-alpha-r-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h4a2 2 0 0 1 2 2v2c0 .84-.5 1.55-1.24 1.85L15 17h-2l-1.2-4H11v4H9zm2 2v2h2V9zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaRBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaRCircleIcon],svg[mdi-alpha-r-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-4h.8l1.2 4h2l-1.24-4.15C14.5 12.55 15 11.84 15 11V9a2 2 0 0 0-2-2zm2 2h2v2h-2zm1-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaRCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaRCircleOutlineIcon],svg[mdi-alpha-r-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h4a2 2 0 0 1 2 2v2c0 .84-.5 1.55-1.24 1.85L15 17h-2l-1.2-4H11v4H9zm2 2v2h2V9zm1-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 4.41 3.58 8 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaRCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaSIcon],svg[mdi-alpha-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"></svg:path>`,
})
export class MdiAlphaSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaSBoxIcon],svg[mdi-alpha-s-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaSBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaSBoxOutlineIcon],svg[mdi-alpha-s-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h4v2h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9v-2h4v-2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaSBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaSCircleIcon],svg[mdi-alpha-s-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7zm1-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaSCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaSCircleOutlineIcon],svg[mdi-alpha-s-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h4v2h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9v-2h4v-2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m1-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaSCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaTIcon],svg[mdi-alpha-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v2h2v8h2V9h2V7z"></svg:path>`,
})
export class MdiAlphaTIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaTBoxIcon],svg[mdi-alpha-t-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v2h2v8h2V9h2V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaTBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaTBoxOutlineIcon],svg[mdi-alpha-t-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h6v2h-2v8h-2V9H9zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaTBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaTCircleIcon],svg[mdi-alpha-t-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v2h2v8h2V9h2V7zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaTCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaTCircleOutlineIcon],svg[mdi-alpha-t-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h6v2h-2v8h-2V9H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaTCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaUIcon],svg[mdi-alpha-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7h-2v8h-2V7z"></svg:path>`,
})
export class MdiAlphaUIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaUBoxIcon],svg[mdi-alpha-u-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7h-2v8h-2V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaUBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaUBoxOutlineIcon],svg[mdi-alpha-u-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v8h2V7h2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaUBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaUCircleIcon],svg[mdi-alpha-u-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7h-2v8h-2V7zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaUCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaUCircleOutlineIcon],svg[mdi-alpha-u-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v8h2V7h2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaUCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaVIcon],svg[mdi-alpha-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7l2 10h2l2-10h-2l-1 5l-1-5z"></svg:path>`,
})
export class MdiAlphaVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaVBoxIcon],svg[mdi-alpha-v-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7l2 10h2l2-10h-2l-1 5l-1-5zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaVBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaVBoxOutlineIcon],svg[mdi-alpha-v-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2l1 5l1-5h2l-2 10h-2zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaVBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaVCircleIcon],svg[mdi-alpha-v-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7l2 10h2l2-10h-2l-1 5l-1-5zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaVCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaVCircleOutlineIcon],svg[mdi-alpha-v-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2l1 5l1-5h2l-2 10h-2zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaVCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaWIcon],svg[mdi-alpha-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17a2 2 0 0 1-2-2V7h2v8h2V8h2v7h2V7h2v8a2 2 0 0 1-2 2z"></svg:path>`,
})
export class MdiAlphaWIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaWBoxIcon],svg[mdi-alpha-w-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17h6a2 2 0 0 0 2-2V7h-2v8h-2V8h-2v7H9V7H7v8a2 2 0 0 0 2 2M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaWBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaWBoxOutlineIcon],svg[mdi-alpha-w-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17a2 2 0 0 1-2-2V7h2v8h2V8h2v7h2V7h2v8a2 2 0 0 1-2 2zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaWBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaWCircleIcon],svg[mdi-alpha-w-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17h6a2 2 0 0 0 2-2V7h-2v8h-2V8h-2v7H9V7H7v8a2 2 0 0 0 2 2m3-15a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaWCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaWCircleOutlineIcon],svg[mdi-alpha-w-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17a2 2 0 0 1-2-2V7h2v8h2V8h2v7h2V7h2v8a2 2 0 0 1-2 2zm3-15a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaWCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaXIcon],svg[mdi-alpha-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7l2 5l-2 5h2l1-2.5l1 2.5h2l-2-5l2-5h-2l-1 2.5L11 7z"></svg:path>`,
})
export class MdiAlphaXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaXBoxIcon],svg[mdi-alpha-x-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7l2 5l-2 5h2l1-2.5l1 2.5h2l-2-5l2-5h-2l-1 2.5L11 7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaXBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaXBoxOutlineIcon],svg[mdi-alpha-x-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2l1 2.5L13 7h2l-2 5l2 5h-2l-1-2.5l-1 2.5H9l2-5zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaXBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaXCircleIcon],svg[mdi-alpha-x-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7l2 5l-2 5h2l1-2.5l1 2.5h2l-2-5l2-5h-2l-1 2.5L11 7zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaXCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaXCircleOutlineIcon],svg[mdi-alpha-x-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2l1 2.5L13 7h2l-2 5l2 5h-2l-1-2.5l-1 2.5H9l2-5zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaXCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaYIcon],svg[mdi-alpha-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7l2 6v4h2v-4l2-6h-2l-1 3l-1-3z"></svg:path>`,
})
export class MdiAlphaYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaYBoxIcon],svg[mdi-alpha-y-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7l2 6v4h2v-4l2-6h-2l-1 3l-1-3zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaYBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaYBoxOutlineIcon],svg[mdi-alpha-y-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2l1 3l1-3h2l-2 6v4h-2v-4zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaYBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaYCircleIcon],svg[mdi-alpha-y-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7l2 6v4h2v-4l2-6h-2l-1 3l-1-3zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaYCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaYCircleOutlineIcon],svg[mdi-alpha-y-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2l1 3l1-3h2l-2 6v4h-2v-4zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaYCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaZIcon],svg[mdi-alpha-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v2h4l-4 6v2h6v-2h-4l4-6V7z"></svg:path>`,
})
export class MdiAlphaZIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaZBoxIcon],svg[mdi-alpha-z-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v2h4l-4 6v2h6v-2h-4l4-6V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaZBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaZBoxOutlineIcon],svg[mdi-alpha-z-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h6v2l-4 6h4v2H9v-2l4-6H9zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiAlphaZBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaZCircleIcon],svg[mdi-alpha-z-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v2h4l-4 6v2h6v-2h-4l4-6V7zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaZCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaZCircleOutlineIcon],svg[mdi-alpha-z-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h6v2l-4 6h4v2H9v-2l4-6H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaZCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphabetAurebeshIcon],svg[mdi-alphabet-aurebesh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v7h11.23L22 4h-3l-5.54 5H5V4zm0 9v7h2v-5h8.46L19 20h3l-7.77-7z"></svg:path>`,
})
export class MdiAlphabetAurebeshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphabetCyrillicIcon],svg[mdi-alphabet-cyrillic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6c-1.64 0-3 1.36-3 3v6c0 1.65 1.36 3 3 3h1c1.65 0 3-1.35 3-3v-3c0-1.64-1.35-3-3-3h-2c0-.56.44-1 1-1h2c1.09 0 2-.91 2-2M5 9v2h3c.57 0 1 .43 1 1H7c-1.64 0-3 1.36-3 3c0 1.65 1.36 3 3 3h4v-6c0-1.64-1.35-3-3-3m7 2h2c.57 0 1 .43 1 1v3c0 .57-.43 1-1 1h-1c-.57 0-1-.43-1-1m-8-1h2v2H7c-.57 0-1-.43-1-1s.43-1 1-1"></svg:path>`,
})
export class MdiAlphabetCyrillicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphabetGreekIcon],svg[mdi-alphabet-greek-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6c-1.64 0-3 1.36-3 3v12h2V9c0-.57.43-1 1-1h1c.57 0 1 .43 1 1v1c0 .57-.43 1-1 1h-1v2h1c.57 0 1 .43 1 1v1c0 .57-.43 1-1 1h-1v2h1c1.65 0 3-1.35 3-3v-1c0-.82-.41-1.54-1-2c.59-.46 1-1.18 1-2V9c0-1.64-1.35-3-3-3M7 9c-1.64 0-3 1.36-3 3v3c0 1.65 1.36 3 3 3h.7c.5 0 .95-.19 1.3-.5v.5h2V9H9v.5c-.35-.31-.8-.5-1.3-.5M7 11h1c.57 0 1 .43 1 1v3c0 .57-.43 1-1 1H7c-.57 0-1-.43-1-1v-3c0-.57.43-1 1-1"></svg:path>`,
})
export class MdiAlphabetGreekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphabetLatinIcon],svg[mdi-alphabet-latin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6v12h2v-.69c.37.42.9.69 1.5.69h.5c1.65 0 3-1.35 3-3v-3c0-1.64-1.35-3-3-3h-.5c-.6 0-1.13.27-1.5.7V6M5 9v2h3c.57 0 1 .43 1 1H7c-1.64 0-3 1.36-3 3c0 1.65 1.36 3 3 3h4v-6c0-1.64-1.35-3-3-3m8 2h1c.57 0 1 .43 1 1v3c0 .57-.43 1-1 1h-1c-.57 0-1-.43-1-1v-3c0-.57.43-1 1-1m-9 3h2v2H7c-.57 0-1-.43-1-1s.43-1 1-1"></svg:path>`,
})
export class MdiAlphabetLatinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphabetPiqadIcon],svg[mdi-alphabet-piqad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.04 4l-6.5 13.85C6.21 18.55 5.5 19 4.73 19H4v1h12c1.2 0 2.27.54 3 1.39h1c-.95-2.07-3-3.39-5.3-3.39H12c-.71 0-1.38-.37-1.76-.97c-.39-.6-.44-1.35-.14-2l.48-1.03H19v-1h-1.5c-2.21 0-4-1.79-4-4s1.79-4 4-4H20V4Z"></svg:path>`,
})
export class MdiAlphabetPiqadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphabetTengwarIcon],svg[mdi-alphabet-tengwar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 7l2.5-4H15l-4 4zm2.5 2c-.54 0-1.04.13-1.5.35V9H8v2h1v10h2v-8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H12v2h.5c1.93 0 3.5-1.57 3.5-3.5v-2c0-1.93-1.57-3.5-3.5-3.5"></svg:path>`,
})
export class MdiAlphabetTengwarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphabeticalIcon],svg[mdi-alphabetical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11a2 2 0 0 1 2 2v4H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm-2 2v2h2v-2zm16 0v2h2v2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2v2zm-8-6v4h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7zm0 8h2v-2h-2z"></svg:path>`,
})
export class MdiAlphabeticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphabeticalOffIcon],svg[mdi-alphabetical-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L16 15.31l-2-2l-.35-.31L10 9.34L2.39 1.73L1.11 3L10 11.89V15a2 2 0 0 0 2 2h2a1.9 1.9 0 0 0 .89-.22l5.95 5.95M12 15v-1.11L13.11 15M16 12.78L14.22 11A2 2 0 0 1 16 12.78M20.2 17L18 14.8V13a2 2 0 0 1 2-2h2v2h-2v2h2v2M6 11H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4v-4a2 2 0 0 0-2-2m0 4H4v-2h2m6-4.2L10.2 7H12Z"></svg:path>`,
})
export class MdiAlphabeticalOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphabeticalVariantIcon],svg[mdi-alphabetical-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2zm0 2h2v2H3m12-.5V9a2 2 0 0 0-2-2H9v10h4a2 2 0 0 0 2-2v-1.5a1.54 1.54 0 0 0-1.5-1.5a1.54 1.54 0 0 0 1.5-1.5M13 15h-2v-2h2zm0-4h-2V9h2m6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h-2v1h-2V9h2v1h2V9a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class MdiAlphabeticalVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAlphabeticalVariantOffIcon],svg[mdi-alphabetical-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.2 9l-2-2H13a2 2 0 0 1 2 2v1.5a1.47 1.47 0 0 1-.36.94L13 9.8V9m10 1V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4.8l3.2 3.2h.8a2 2 0 0 0 2-2v-1h-2v1h-2V9h2v1m-6 4.35l7.11 7.11l-1.27 1.27l-6.38-6.38A2 2 0 0 1 13 17H9v-6.11l-2-2V17H5v-4H3v4H1V9a2 2 0 0 1 2-2h2.12l-4-4l1.27-1.27L9 8.34l2 2l.66.66L15 14.34M5 9H3v2h2m8 3.89L11.11 13H11v2h2Z"></svg:path>`,
})
export class MdiAlphabeticalVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAltimeterIcon],svg[mdi-altimeter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3v2h10V3zm2 4v2h6V7zm-7 .96v8.08L6.03 12zm20.03 0L18 12l4.03 4.04zM7 11v2h10v-2zm2 4v2h6v-2zm-2 4v2h10v-2z"></svg:path>`,
})
export class MdiAltimeterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAmazonIcon],svg[mdi-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15.93 17.09c-.18.16-.43.17-.63.06c-.89-.74-1.05-1.08-1.54-1.79c-1.47 1.5-2.51 1.95-4.42 1.95c-2.25 0-4.01-1.39-4.01-4.17c0-2.18 1.17-3.64 2.86-4.38c1.46-.64 3.49-.76 5.04-.93V7.5c0-.66.05-1.41-.33-1.96c-.32-.49-.95-.7-1.5-.7c-1.02 0-1.93.53-2.15 1.61c-.05.24-.25.48-.47.49l-2.6-.28c-.22-.05-.46-.22-.4-.56c.6-3.15 3.45-4.1 6-4.1c1.3 0 3 .35 4.03 1.33C17.11 4.55 17 6.18 17 7.95v4.17c0 1.25.5 1.81 1 2.48c.17.25.21.54 0 .71l-2.06 1.78h-.01m-2.7-6.53V10c-1.94 0-3.99.39-3.99 2.67c0 1.16.61 1.95 1.63 1.95c.76 0 1.43-.47 1.86-1.22c.52-.93.5-1.8.5-2.84m6.93 8.98C18 21.14 14.82 22 12.1 22c-3.81 0-7.25-1.41-9.85-3.76c-.2-.18-.02-.43.25-.29c2.78 1.63 6.25 2.61 9.83 2.61c2.41 0 5.07-.5 7.51-1.53c.37-.16.66.24.32.51m.91-1.04c-.28-.36-1.85-.17-2.57-.08c-.19.02-.22-.16-.03-.3c1.24-.88 3.29-.62 3.53-.33c.24.3-.07 2.35-1.24 3.32c-.18.16-.35.07-.26-.11c.26-.67.85-2.14.57-2.5z" fill="currentColor"></svg:path>`,
})
export class MdiAmazonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAmazonAlexaIcon],svg[mdi-amazon-alexa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1.57 19.87v-1.96c0-.69-.43-1.34-1.08-1.61c-2.44-1.04-4.18-3.47-4.18-6.3c0-3.74 3.05-6.83 6.83-6.83c3.78 0 6.83 3.09 6.83 6.83c0 4.43-3.44 8.61-8.4 9.87z" fill="currentColor"></svg:path>`,
})
export class MdiAmazonAlexaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAmazonDriveIcon],svg[mdi-amazon-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4.94 11.12c.29 0 .56.04.82.11a3.892 3.892 0 0 1 3.89-3.88c1.62 0 3.02 1 3.59 2.42a3.15 3.15 0 0 1 2.52-1.24a3.188 3.188 0 0 1 3.1 3.9c.24-.09.51-.14.79-.14a2.356 2.356 0 0 1 0 4.71H4.94C3.32 17 2 15.68 2 14.06c0-1.63 1.32-2.94 2.94-2.94z" fill="currentColor"></svg:path>`,
})
export class MdiAmazonDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAmbulanceIcon],svg[mdi-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5m1.5-9H17V12h4.46zM6 18.5A1.5 1.5 0 0 0 7.5 17A1.5 1.5 0 0 0 6 15.5A1.5 1.5 0 0 0 4.5 17A1.5 1.5 0 0 0 6 18.5M20 8l3 4v5h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3H9a3 3 0 0 1-3 3a3 3 0 0 1-3-3H1V6c0-1.11.89-2 2-2h14v4zM8 6v3H5v2h3v3h2v-3h3V9h-3V6z"></svg:path>`,
})
export class MdiAmbulanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAmmunitionIcon],svg[mdi-ammunition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22h-4v-1h4zm-1-12V7h-2v3l-1 1.5V20h4v-8.5zm-1-8s-1 1-1 3v1h2V5s0-2-1-3M8 22H4v-1h4zM7 10V7H5v3l-1 1.5V20h4v-8.5zM6 2S5 3 5 5v1h2V5s0-2-1-3m14 20h-4v-1h4zm-1-12V7h-2v3l-1 1.5V20h4v-8.5zm-1-8s-1 1-1 3v1h2V5s0-2-1-3"></svg:path>`,
})
export class MdiAmmunitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAmpersandIcon],svg[mdi-ampersand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.4 16.5c0-.9.3-1.8.8-2.6q.75-1.2 3-2.7c-.9-1.1-1.4-1.9-1.7-2.5c-.4-.7-.5-1.3-.5-2c0-1.5.4-2.6 1.3-3.5S9.4 2 10.9 2q1.95 0 3.3 1.2c.9.8 1.3 1.8 1.3 2.9c0 .8-.2 1.5-.6 2.2q-.6 1.05-2.1 2.1l-1.4 1.1l4.3 5.2c.6-1.2.9-2.4.9-3.9h2.2c0 2.3-.5 4.2-1.6 5.7l2.8 3.3h-3l-1.3-1.5c-.7.6-1.4 1-2.3 1.3s-1.8.5-2.7.5c-1.9 0-3.4-.5-4.6-1.5c-1.1-1.1-1.7-2.4-1.7-4.1m6.3 3.5q1.95 0 3.6-1.5l-4.7-5.7l-.4.3C7.7 14.2 7 15.3 7 16.5c0 1.1.3 1.9 1 2.5s1.5 1 2.7 1M8.5 6.7c0 .9.5 1.9 1.6 3.2l1.6-1.1q.9-.6 1.2-1.2c.2-.4.3-.9.3-1.4c0-.6-.2-1.1-.7-1.5c-.4-.4-1-.6-1.7-.6s-1.3.2-1.7.7s-.6 1.1-.6 1.9"></svg:path>`,
})
export class MdiAmpersandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAmplifierIcon],svg[mdi-amplifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a1 1 0 0 1 1 1h6v18h-2a1 1 0 0 1-1 1a1 1 0 0 1-1-1H7a1 1 0 0 1-1 1a1 1 0 0 1-1-1H3V3h6a1 1 0 0 1 1-1M5 5v4h14V5zm2 1a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m5 0h2v1h-2zm3 0h1v2h-1zm2 0h1v2h-1zm-5 5a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m-2-5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiAmplifierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAmplifierOffIcon],svg[mdi-amplifier-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3L3 4.9V21h2c0 .6.4 1 1 1s1-.4 1-1h10c0 .6.4 1 1 1s1-.4 1-1h.1l1.7 1.7zM5 9V6.9L7.1 9zm7 10c-2.2 0-4-1.8-4-4c0-1.4.7-2.6 1.8-3.3l5.5 5.5c-.7 1.1-1.9 1.8-3.3 1.8m2-13v1h-2V6zm-4 0c.6 0 1 .4 1 1c0 .2-.1.4-.2.6L9.4 6.2c.2-.1.4-.2.6-.2M8.2 5l-2-2H9c0-.6.4-1 1-1h4c.6 0 1 .4 1 1h6v14.8L12.2 9H19V5zM16 6v2h-1V6zm2 0v2h-1V6z"></svg:path>`,
})
export class MdiAmplifierOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAnchorIcon],svg[mdi-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a3 3 0 0 0-3 3a3 3 0 0 0 2 2.83V9H8v2h3v8.92c-.74-.13-1.5-.34-2.21-.65c-.74-.32-1.39-.71-1.97-1.18s-1.04-.98-1.38-1.54L7 15l-4-3v3c0 .97.27 1.88.82 2.72A8.2 8.2 0 0 0 6 19.95c.87.64 1.84 1.14 2.88 1.5c1.05.36 2.09.55 3.12.55s2.07-.2 3.12-.56c1.04-.36 2.01-.86 2.88-1.49c.92-.64 1.63-1.38 2.18-2.23c.55-.84.82-1.75.82-2.72v-3l-4 3l1.56 1.55c-.34.56-.8 1.07-1.38 1.54s-1.23.86-1.97 1.18c-.71.31-1.47.52-2.21.65V11h3V9h-3V7.82A3 3 0 0 0 15 5a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAndroidIcon],svg[mdi-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.61 15.15c-.46 0-.84-.37-.84-.83s.38-.82.84-.82s.84.36.84.82s-.38.83-.84.83m-9.2 0c-.46 0-.84-.37-.84-.83s.38-.82.84-.82s.83.36.83.82s-.37.83-.83.83m9.5-5.01l1.67-2.88c.09-.17.03-.38-.13-.47c-.17-.1-.38-.04-.45.13l-1.71 2.91A10.15 10.15 0 0 0 12 8.91c-1.53 0-3 .33-4.27.91L6.04 6.91a.334.334 0 0 0-.47-.13c-.17.09-.22.3-.13.47l1.66 2.88C4.25 11.69 2.29 14.58 2 18h20c-.28-3.41-2.23-6.3-5.09-7.86"></svg:path>`,
})
export class MdiAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAndroidAutoIcon],svg[mdi-android-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M22.78 17.91c.16.25.22.51.22.79c0 .38-.13.69-.43.94s-.63.36-1.01.36h-2.48L12.42 8h-.84L4.92 20H2.39c-.47 0-.86-.2-1.17-.62c-.31-.42-.33-.88-.05-1.38l9.61-16.31C11.09 1.22 11.5 1 12 1c.53 0 .92.22 1.17.69l9.61 16.22m-18 4.4L12 9.38l7.22 12.93l-.72.69l-6.5-2.66L5.44 23l-.66-.69z" fill="currentColor"></svg:path>`,
})
export class MdiAndroidAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAndroidDebugBridgeIcon],svg[mdi-android-debug-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 9a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1M9 9a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m7.12-4.63l2.1-2.1l-.82-.83l-2.31 2.31C14.16 3.28 13.11 3 12 3c-1.12 0-2.16.28-3.09.75L6.6 1.44l-.82.83l2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63M5 16c0 3.86 3.13 7 7 7a7 7 0 0 0 7-7v-4H5v4z" fill="currentColor"></svg:path>`,
})
export class MdiAndroidDebugBridgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAndroidHeadIcon],svg[mdi-android-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 11.5a1.25 1.25 0 0 0-1.25 1.25A1.25 1.25 0 0 0 8 14a1.25 1.25 0 0 0 1.25-1.25A1.25 1.25 0 0 0 8 11.5m8 0a1.25 1.25 0 0 0-1.25 1.25A1.25 1.25 0 0 0 16 14a1.25 1.25 0 0 0 1.25-1.25A1.25 1.25 0 0 0 16 11.5M12 7c1.5 0 2.9.33 4.18.91l2.16-2.16a.996.996 0 1 1 1.41 1.41l-1.8 1.8A9.999 9.999 0 0 1 22 17H2c0-3.29 1.59-6.21 4.05-8.04l-1.8-1.8a.996.996 0 1 1 1.41-1.41l2.16 2.16C9.1 7.33 10.5 7 12 7z" fill="currentColor"></svg:path>`,
})
export class MdiAndroidHeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAndroidMessagesIcon],svg[mdi-android-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H7a2 2 0 0 1-2-2V8.94l-2.77-3.3C2.09 5.47 2 5.24 2 5a1 1 0 0 1 1-1h17a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-10m0 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-10m0 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5Z"></svg:path>`,
})
export class MdiAndroidMessagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAndroidStudioIcon],svg[mdi-android-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v2h.5A1.5 1.5 0 0 1 15 5.5V9l-.44.44l1.64 2.84C17.31 11.19 18 9.68 18 8h2c0 2.42-1.07 4.59-2.77 6.06l3.14 5.44l.13 2.22l-1.87-1.22l-3.07-5.33c-1.06.53-2.28.83-3.56.83s-2.5-.3-3.56-.83L5.37 20.5L3.5 21.72l.13-2.22L9.44 9.44L9 9V5.5A1.5 1.5 0 0 1 10.5 4h.5zM9.44 13.43c.78.37 1.65.57 2.56.57s1.78-.2 2.56-.57L13.1 10.9h-.01c-.62.6-1.56.6-2.18 0h-.01zM12 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiAndroidStudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAngleAcuteIcon],svg[mdi-angle-acute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19H4.09L14.18 4.43l1.64 1.14l-4.54 6.56c1.61.83 2.72 2.49 2.72 4.41c0 .16 0 .31-.03.46H20zM7.91 17h4.05c.04-.15.04-.3.04-.46c0-1.26-.76-2.32-1.86-2.76z"></svg:path>`,
})
export class MdiAngleAcuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAngleObtuseIcon],svg[mdi-angle-obtuse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19H9.31L4.07 5.36l1.86-.72l3.03 7.86a4.8 4.8 0 0 1 1.75-.33A4.88 4.88 0 0 1 15.58 17H21zm-10.31-2h2.89a2.85 2.85 0 0 0-2.87-2.83c-.37 0-.71.07-1.04.19z"></svg:path>`,
})
export class MdiAngleObtuseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAngleRightIcon],svg[mdi-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4h2v7h6v6h7v2H5zm2 13h4v-4H7z"></svg:path>`,
})
export class MdiAngleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAngularIcon],svg[mdi-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2.5l8.84 3.15l-1.34 11.7L12 21.5l-7.5-4.15l-1.34-11.7zm0 2.1L6.47 17h2.06l1.11-2.78h4.7L15.45 17h2.05zm1.62 7.9h-3.23L12 8.63z"></svg:path>`,
})
export class MdiAngularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAngularjsIcon],svg[mdi-angularjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2.5l8.84 3.15l-1.34 11.7L12 21.5l-7.5-4.15l-1.34-11.7zm0 2L5 7l1.08 9.22L12 19.5l5.92-3.28L19 7zm0 1.22L16.58 16h-1.71l-.93-2.28h-3.9L9.12 16H7.41zm1.34 6.58L12 9.07l-1.34 3.23z"></svg:path>`,
})
export class MdiAngularjsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAnimationIcon],svg[mdi-animation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c-1.11 0-2 .89-2 2v10h2V4h10V2zm4 4c-1.11 0-2 .89-2 2v10h2V8h10V6zm4 4c-1.11 0-2 .89-2 2v8c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-8c0-1.11-.89-2-2-2z"></svg:path>`,
})
export class MdiAnimationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAnimationOutlineIcon],svg[mdi-animation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v10h2V4h10V2zm4 4a2 2 0 0 0-2 2v10h2V8h10V6zm12 6v8h-8v-8zm0-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiAnimationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAnimationPlayIcon],svg[mdi-animation-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h10v2H4v10H2V4c0-1.11.89-2 2-2m4 4h10v2H8v10H6V8c0-1.11.89-2 2-2m4 4h8c1.11 0 2 .89 2 2v8c0 1.11-.89 2-2 2h-8c-1.11 0-2-.89-2-2v-8c0-1.11.89-2 2-2m2 2v8l6-4z"></svg:path>`,
})
export class MdiAnimationPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAnimationPlayOutlineIcon],svg[mdi-animation-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v10h2V4h10V2zm4 4a2 2 0 0 0-2 2v10h2V8h10V6zm12 6v8h-8v-8zm0-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-6 3v6l4-3z"></svg:path>`,
})
export class MdiAnimationPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAnsibleIcon],svg[mdi-ansible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.1 15c-.19 0-.34-.1-.55-.27l-5.16-4.17l-1.73 4.34H7.17l4.37-10.51c.11-.28.35-.42.63-.42s.5.14.62.42l3.98 9.58c.04.11.07.22.07.29c-.01.42-.34.74-.74.74m-3.93-8.89l2.59 6.39l-3.91-3.08z"></svg:path>`,
})
export class MdiAnsibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAntennaIcon],svg[mdi-antenna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5c.69 0 1.27.23 1.76.7s.74 1.07.74 1.8q0 1.575-1.5 2.28V21h-2v-8.72Q9.5 11.575 9.5 10c0-.73.26-1.33.74-1.8s1.07-.7 1.76-.7m4.69-2.2c1.25 1.25 1.92 2.81 2.01 4.7c0 1.8-.67 3.38-2.01 4.72L15.5 13.5c1-.91 1.5-2.08 1.5-3.5c0-1.33-.5-2.5-1.5-3.5zM6.09 4.08C4.5 5.67 3.7 7.64 3.7 10s.8 4.3 2.39 5.89l-1.17 1.22C3 15.08 2 12.7 2 10s1-5.06 2.92-7.09zm12.99-1.17C21 4.94 22 7.3 22 10c0 2.8-1 5.17-2.92 7.11l-1.17-1.22C19.5 14.3 20.3 12.33 20.3 10s-.8-4.33-2.39-5.92zM7.31 5.3L8.5 6.5C7.5 7.42 7 8.58 7 10c0 1.33.5 2.5 1.5 3.5l-1.19 1.22C5.97 13.38 5.3 11.8 5.3 10s.67-3.36 2.01-4.7"></svg:path>`,
})
export class MdiAntennaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAnvilIcon],svg[mdi-anvil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v5c4.03 2.47-.56 4.97-3 6v3h15v-3c-6.41-2.73-3.53-7 1-8V5zM2 6c.81 2.13 2.42 3.5 5 4V6z"></svg:path>`,
})
export class MdiAnvilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApacheKafkaIcon],svg[mdi-apache-kafka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.54 12.97c-.68 0-1.3.25-1.78.67l-1.29-.75c.09-.29.13-.6.13-.92s-.04-.63-.1-.92l1.23-.73c.48.44 1.12.68 1.81.68c1.49 0 2.7-1.19 2.7-2.68s-1.21-2.69-2.7-2.69s-2.7 1.21-2.7 2.7c0 .17.02.37.05.55l-1.25.72c-.43-.45-1-.78-1.64-.95V7.26a2.705 2.705 0 0 0 1.88-2.57C11.88 3.2 10.67 2 9.18 2S6.5 3.2 6.5 4.69c0 1.2.76 2.21 1.84 2.57v1.4a3.42 3.42 0 0 0-2.58 3.31c0 1.6 1.1 2.94 2.58 3.31v1.45A2.69 2.69 0 0 0 6.5 19.3c0 1.49 1.19 2.7 2.68 2.7s2.7-1.21 2.7-2.7c0-1.2-.79-2.22-1.88-2.57v-1.44c.64-.16 1.2-.49 1.64-.94l1.26.73c-.04.19-.06.38-.06.58c0 1.49 1.21 2.7 2.7 2.7s2.7-1.21 2.7-2.7s-1.21-2.69-2.7-2.69m0-5.97c.74 0 1.33.59 1.33 1.32s-.59 1.34-1.33 1.34s-1.33-.6-1.33-1.34S14.8 7 15.54 7M7.85 4.69c0-.74.59-1.34 1.33-1.34s1.32.6 1.32 1.34s-.58 1.34-1.32 1.34s-1.33-.6-1.33-1.34M10.5 19.3c0 .74-.58 1.34-1.32 1.34s-1.33-.6-1.33-1.34s.59-1.34 1.33-1.34s1.32.6 1.32 1.34m-1.32-5.41a1.92 1.92 0 1 1 .001-3.841a1.92 1.92 0 0 1-.001 3.841M15.54 17c-.74 0-1.33-.6-1.33-1.34s.59-1.33 1.33-1.33s1.33.6 1.33 1.33S16.28 17 15.54 17"></svg:path>`,
})
export class MdiApacheKafkaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApiIcon],svg[mdi-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7H5a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2m0 4H5V9h2m7-2h-4v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m0 4h-2V9h2m6 0v6h1v2h-4v-2h1V9h-1V7h4v2Z"></svg:path>`,
})
export class MdiApiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApiOffIcon],svg[mdi-api-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11H5V9h2m7-2h-2.62l1.91 2H14v.75l1.87 1.96c.08-.21.13-.46.13-.71V9a2 2 0 0 0-2-2M4.45 2.62L3 4l2.86 3H5c-1.1 0-2 .9-2 2v8h2v-4h2v4h2v-6.7l1 1.04V17h2v-3.55l7.55 7.93L21 20m-.1-3h.1v-2h-1V9h1V7h-4v2h1v4.95Z"></svg:path>`,
})
export class MdiApiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppleIcon],svg[mdi-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11"></svg:path>`,
})
export class MdiAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppleFinderIcon],svg[mdi-apple-finder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m9-1V8c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1m5-5v15c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2M4 20h9.06c-.1-.65-.17-1.36-.23-2.06c-.27.02-.53.06-.83.06c-3.76 0-5.69-2.27-5.77-2.37a1.01 1.01 0 0 1 .13-1.41a1.01 1.01 0 0 1 1.41.13C7.83 14.43 9.23 16 12 16c.27 0 .5-.03.74-.05c-.03-1.2-.01-2.21 0-2.69h-1.81c-.65 0-1.18-.56-1.18-1.26c.02-.25.32-4.18 1.25-7H4zm16 0V5h-7.4c-.86 2.19-1.23 5.73-1.33 6.76h1.81c.64 0 1.17.56 1.17 1.24c0 .04-.04 1.15-.01 2.6c1.3-.49 1.98-1.25 1.99-1.26a.998.998 0 1 1 1.54 1.27c-.06.07-1.22 1.44-3.45 2.07c.06.82.14 1.61.26 2.32z"></svg:path>`,
})
export class MdiAppleFinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppleIcloudIcon],svg[mdi-apple-icloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15.04c0 2.19-1.76 3.96-3.93 3.96H5.93C3.76 19 2 17.23 2 15.04c0-1.97 1.43-3.6 3.31-3.9c-.03-.14-.04-.28-.04-.43c0-1.38 1.11-2.51 2.49-2.51c.61 0 1.18.23 1.61.6c.77-1.75 1.76-3.36 4.54-3.36c3.37 0 4.96 2.62 4.96 5.39c0 .11 0 .23-.01.34A3.95 3.95 0 0 1 22 15.04"></svg:path>`,
})
export class MdiAppleIcloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppleIosIcon],svg[mdi-apple-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.09 16.8h1.66V9.76H2.09m.83-.92a.9.9 0 0 0 .92-.9c0-.5-.4-.9-.92-.9a.9.9 0 0 0-.92.9c0 .5.4.9.92.9m6.33-1.78C6.46 7.06 4.7 8.96 4.7 12c0 3.06 1.76 4.96 4.55 4.96s4.55-1.9 4.55-4.96c0-3.04-1.76-4.94-4.55-4.94m0 1.44c1.71 0 2.8 1.37 2.8 3.5c0 2.15-1.09 3.5-2.8 3.5S6.46 14.15 6.46 12c0-2.13 1.08-3.5 2.79-3.5m5.25 5.61c.07 1.76 1.5 2.85 3.72 2.85c2.32 0 3.78-1.14 3.78-2.96c0-1.43-.82-2.23-2.77-2.68l-1.1-.25c-1.18-.28-1.66-.65-1.66-1.29c0-.78.73-1.33 1.81-1.33c1.1 0 1.85.55 1.93 1.44h1.63c-.04-1.69-1.43-2.83-3.55-2.83c-2.08 0-3.56 1.15-3.56 2.85c0 1.37.83 2.22 2.6 2.62l1.24.29c1.21.29 1.7.68 1.7 1.38c0 .8-.8 1.37-1.96 1.37s-2.05-.57-2.15-1.46z"></svg:path>`,
})
export class MdiAppleIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppleKeyboardCapsIcon],svg[mdi-apple-keyboard-caps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14V8h2.17L12 2.83L6.83 8H9v6zM12 0l10 10h-5v6H7v-6H2zM7 18h10v6H7zm8 2H9v2h6z"></svg:path>`,
})
export class MdiAppleKeyboardCapsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppleKeyboardCommandIcon],svg[mdi-apple-keyboard-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a4 4 0 0 1 4 4v2h4V6a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-2v4h2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-2h-4v2a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4h2v-4H6a4 4 0 0 1-4-4a4 4 0 0 1 4-4m10 16a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2zm-2-8h-4v4h4zm-8 6a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2v-2zM8 6a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2h2zm10 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2z"></svg:path>`,
})
export class MdiAppleKeyboardCommandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppleKeyboardControlIcon],svg[mdi-apple-keyboard-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.78 11.78l-1.42 1.41L12 6.83l-6.36 6.36l-1.42-1.41L12 4z"></svg:path>`,
})
export class MdiAppleKeyboardControlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppleKeyboardOptionIcon],svg[mdi-apple-keyboard-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h6.11l7.04 14H21v2h-6.12L7.84 6H3zm11 0h7v2h-7z"></svg:path>`,
})
export class MdiAppleKeyboardOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppleKeyboardShiftIcon],svg[mdi-apple-keyboard-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18v-6h2.17L12 6.83L6.83 12H9v6zM12 4l10 10h-5v6H7v-6H2z"></svg:path>`,
})
export class MdiAppleKeyboardShiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppleSafariIcon],svg[mdi-apple-safari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 2.09.8 4 2.11 5.41l3.77-7.53l7.53-3.77A7.93 7.93 0 0 0 12 4m0 16a8 8 0 0 0 8-8c0-2.09-.8-4-2.11-5.41l-3.77 7.53l-7.53 3.77A7.93 7.93 0 0 0 12 20m0-8l-.77-.77L9.7 14.3l3.07-1.53zm0 5.5h1V19h-1zm3.88-1.61l.71-.71l1.06 1.06l-.71.71zM17.5 12v-1H19v1zM12 6.5h-1V5h1zM8.12 8.11l-.71.71l-1.06-1.06l.71-.71zM6.5 12v1H5v-1z"></svg:path>`,
})
export class MdiAppleSafariIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationIcon],svg[mdi-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 5H3V4h18z"></svg:path>`,
})
export class MdiApplicationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationArrayIcon],svg[mdi-application-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-11 9H8v7h2v2H6V9h4zm8 9h-4v-2h2v-7h-2V9h4zm3-13H3V4h18z"></svg:path>`,
})
export class MdiApplicationArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationArrayOutlineIcon],svg[mdi-application-array-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H3V6h18zM6 8v10h4v-2H8v-6h2V8zm10 8h-2v2h4V8h-4v2h2z"></svg:path>`,
})
export class MdiApplicationArrayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationBracesIcon],svg[mdi-application-braces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-10 9H9v1.5c0 1.1-.9 2-2 2c1.1 0 2 .9 2 2V18h2v2H9c-1.1 0-2-.9-2-2v-.5c0-1.1-.9-2-2-2v-2c1.1 0 2-.9 2-2V11c0-1.1.9-2 2-2h2zm8 4.5c-1.1 0-2 .9-2 2v.5c0 1.1-.9 2-2 2h-2v-2h2v-1.5c0-1.1.9-2 2-2c-1.1 0-2-.9-2-2V11h-2V9h2c1.1 0 2 .9 2 2v.5c0 1.1.9 2 2 2zM21 7H3V4h18z"></svg:path>`,
})
export class MdiApplicationBracesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationBracesOutlineIcon],svg[mdi-application-braces-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H3V6h18zM9 8c-1.1 0-2 .9-2 2s-.9 2-2 2v2c1.1 0 2 .9 2 2s.9 2 2 2h2v-2H9v-1c0-1.1-.9-2-2-2c1.1 0 2-.9 2-2v-1h2V8m4 0c1.1 0 2 .9 2 2s.9 2 2 2v2c-1.1 0-2 .9-2 2s-.9 2-2 2h-2v-2h2v-1c0-1.1.9-2 2-2c-1.1 0-2-.9-2-2v-1h-2V8z"></svg:path>`,
})
export class MdiApplicationBracesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationBracketsIcon],svg[mdi-application-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M11 17.5L9.5 19L5 14.5L9.5 10l1.5 1.5l-3 3zm3.5 1.5L13 17.5l3-3l-3-3l1.5-1.5l4.5 4.5zM21 7H3V4h18z"></svg:path>`,
})
export class MdiApplicationBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationBracketsOutlineIcon],svg[mdi-application-brackets-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 8.5L11 10l-3 3l3 3l-1.5 1.5L5 13zm5 9L13 16l3-3l-3-3l1.5-1.5L19 13zM21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 18H3V6h18z"></svg:path>`,
})
export class MdiApplicationBracketsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationCogIcon],svg[mdi-application-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.7 18.6v-1l1.1-.8c.1-.1.2-.2.1-.3l-1-1.7c0-.1-.2-.1-.3-.1l-1.2.5c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2h-2c-.2 0-.3.1-.3.2l-.2 1.3c-.3.2-.5.3-.8.5l-1.2-.5c-.1 0-.2 0-.3.1l-1 1.7c0 .1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.1-.2.2-.1.3l1 1.7c.1.1.2.1.3.1l1.2-.5c.2.2.5.4.8.5l.2 1.3c.1.1.2.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.2.5-.3.8-.5l1.2.4c.1 0 .2 0 .3-.1l1-1.7c.1-.1.1-.2 0-.2zm-3.7.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5M11 18c0-3.9 3.1-7 7-7c2 0 3.7.8 5 2.1V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9.3c-.8-1.1-1.3-2.5-1.3-4M3 4h18v3H3z"></svg:path>`,
})
export class MdiApplicationCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationCogOutlineIcon],svg[mdi-application-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.7 18.6v-1l1.1-.8c.1-.1.2-.2.1-.3l-1-1.7c0-.1-.2-.1-.3-.1l-1.2.5c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2h-2c-.2 0-.3.1-.3.2l-.2 1.3c-.3.2-.5.3-.8.5l-1.2-.5c-.1 0-.2 0-.3.1l-1 1.7c0 .1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.1-.2.2-.1.3l1 1.7c.1.1.2.1.3.1l1.2-.5c.2.2.5.4.8.5l.2 1.3c.1.1.2.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.2.5-.3.8-.5l1.2.4c.1 0 .2 0 .3-.1l1-1.7c.1-.1.1-.2 0-.2zm-3.7.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5M12.3 22H3c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v9.1c-.6-.6-1.3-1.1-2-1.4V6H3v14h8.3c.2.7.5 1.4 1 2"></svg:path>`,
})
export class MdiApplicationCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationEditIcon],svg[mdi-application-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 20.1l8.2-8.2c.5-.5 1.1-.8 1.8-.8s1.3.3 1.8.8l.2.2V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8zM3 4h18v3H3zm18 9.1c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-1.9 1.8l-6.1 6V23h2.1l6.1-6.1z"></svg:path>`,
})
export class MdiApplicationEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationEditOutlineIcon],svg[mdi-application-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20v2H3c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v8.1l-.2-.2c-.5-.5-1.1-.8-1.8-.8V6H3v14zm10.4-6.7l1.3 1.3c.2.2.2.6 0 .8l-1 1l-2.1-2.1l1-1c.1-.1.2-.2.4-.2s.3.1.4.2m-.3 3.6l-6 6.1H13v-2.1l6.1-6.1z"></svg:path>`,
})
export class MdiApplicationEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationExportIcon],svg[mdi-application-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12h9.8l-2.5-2.5l1.4-1.4l4.9 4.9l-4.9 4.9l-1.4-1.4l2.5-2.5H9zm12 5.4V20H3V6h18v2.6l2 2V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-4.6z"></svg:path>`,
})
export class MdiApplicationExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationImportIcon],svg[mdi-application-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12h9.8L8.3 9.5l1.4-1.4l4.9 4.9l-4.9 4.9l-1.4-1.4l2.5-2.5H1zM21 2H3c-1.1 0-2 .9-2 2v6.1h2V6h18v14H3v-4H1v4c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2"></svg:path>`,
})
export class MdiApplicationImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationOutlineIcon],svg[mdi-application-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H3V6h18z"></svg:path>`,
})
export class MdiApplicationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationParenthesesIcon],svg[mdi-application-parentheses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M10 19.4l-1.6.6C6.9 18.6 6 16.6 6 14.5s.9-4.1 2.4-5.5l1.6.6c-1.3 1.1-2 3-2 4.9s.7 3.7 2 4.9m5.6.6l-1.6-.6c1.3-1.2 2-3 2-4.9s-.7-3.7-2-4.9l1.6-.6c1.5 1.4 2.4 3.4 2.4 5.5s-.9 4.1-2.4 5.5M21 7H3V4h18z"></svg:path>`,
})
export class MdiApplicationParenthesesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationParenthesesOutlineIcon],svg[mdi-application-parentheses-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H3V6h18zM15.6 8c1.5 1.3 2.4 3.1 2.4 5s-.9 3.7-2.4 5l-1.6-.6c1.3-1 2-2.7 2-4.4s-.7-3.4-2-4.4zM8.4 8l1.6.6c-1.3 1-2 2.7-2 4.4s.7 3.4 2 4.4l-1.6.6C6.9 16.7 6 14.9 6 13s.9-3.7 2.4-5"></svg:path>`,
})
export class MdiApplicationParenthesesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationSettingsIcon],svg[mdi-application-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 0H3C1.9 0 1 .9 1 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 5H3V2h18zM7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiApplicationSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationSettingsOutlineIcon],svg[mdi-application-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 0H3C1.9 0 1 .9 1 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 18H3V4h18zM7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiApplicationSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationVariableIcon],svg[mdi-application-variable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M7.4 20C5.9 18.6 5 16.6 5 14.5s.9-4.1 2.4-5.5l1.6.6c-1.3 1.1-2 3-2 4.9s.7 3.7 2 4.9zm5.3-2l-.8-2l-1.4 2H9l2.3-3.1L10 12h1.3l.8 2l1.4-2H15l-2.2 3l1.3 3zm3.9 2l-1.6-.6c1.3-1.2 2-3 2-4.9s-.7-3.7-2-4.9l1.6-.6c1.5 1.4 2.4 3.4 2.4 5.5s-.9 4.1-2.4 5.5M21 7H3V4h18z"></svg:path>`,
})
export class MdiApplicationVariableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationVariableOutlineIcon],svg[mdi-application-variable-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H3V6h18zM16.6 8c1.5 1.3 2.4 3.1 2.4 5s-.9 3.7-2.4 5l-1.6-.6c1.3-1 2-2.7 2-4.4s-.7-3.4-2-4.4zM7.4 8l1.6.6c-1.3 1-2 2.7-2 4.4s.7 3.4 2 4.4l-1.6.6C5.9 16.7 5 14.9 5 13s.9-3.7 2.4-5m4.7 4l1.4-2H15l-2.2 3l1.3 3h-1.3l-.8-2l-1.4 2H9l2.3-3.1L10 10h1.3z"></svg:path>`,
})
export class MdiApplicationVariableOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppnetIcon],svg[mdi-appnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14.474 9.142c.597-1.45 1.706-4.862 1.877-5.46c.17-.597.597-.682.853-.682h2.047c.341 0 .533.256.448.682c-2.154 7.593-3.604 9.81-3.604 10.323c0 1.28 1.365 3.668 2.644 3.668c.768 0 .598-1.109 1.45-1.109h1.621c.256 0 .512.256.512.682c0 .427-.474 3.754-3.716 3.754s-4.452-3.919-4.452-3.919C13.727 17.934 11.232 21 8.161 21c-5.46 0-6.483-5.8-6.483-9.213C1.678 8.374 3.298 3 7.905 3s6.569 6.142 6.569 6.142zm-9.981 2.389c0 1.962-.085 6.057 3.508 6.142c2.037.085 3.914-2.474 4.804-4.521c-1.232-4.266-2.085-6.825-4.814-6.825c-3.669.085-3.498 5.204-3.498 5.204z" fill="currentColor"></svg:path>`,
})
export class MdiAppnetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApproximatelyEqualIcon],svg[mdi-approximately-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.9 9.2c-.8.9-2.3 1.8-3.9 1.8c-1.5 0-2.4-.5-3.2-.9c-.8-.3-1.6-.8-2.9-.8c-1.2 0-2.3.7-2.9 1.3L5 9.1c.9-.9 2.3-1.9 3.9-1.9c1.5 0 2.4.6 3.2.9s1.6.9 2.9.9c1.2 0 2.3-.8 2.9-1.4zm.1 4.9c-.9.9-2.3 1.9-3.9 1.9c-1.5 0-2.4-.5-3.2-.9c-.8-.3-1.6-.9-2.9-.9c-1.2 0-2.3.8-2.9 1.4l-1-1.6c.9-.9 2.3-1.9 3.9-1.9c1.5 0 2.4.5 3.2.9c.8.3 1.6.8 2.9.8c1.2 0 2.3-.8 2.9-1.4z"></svg:path>`,
})
export class MdiApproximatelyEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiApproximatelyEqualBoxIcon],svg[mdi-approximately-equal-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9.3 8.2c1.3 0 2.1.5 2.8.8c.6.3 1.3.7 2.4.7c1 0 2-.7 2.5-1.2l.8 1.3c-.7.8-2 1.6-3.4 1.6c-1.3 0-2.1-.5-2.7-.8s-1.4-.7-2.5-.7c-1 0-2 .7-2.5 1.2L6 9.8c.7-.8 2-1.6 3.3-1.6m5.3 7.6c-1.3 0-2.1-.5-2.8-.8c-.6-.3-1.4-.7-2.5-.7c-1 0-2 .7-2.5 1.2L6 14.1c.7-.8 2-1.6 3.3-1.6s2.1.5 2.8.8c.6.3 1.3.7 2.5.7c1 0 2-.7 2.5-1.2l.8 1.3c-.6.9-1.9 1.7-3.3 1.7"></svg:path>`,
})
export class MdiApproximatelyEqualBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppsIcon],svg[mdi-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6 4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6 4h4v-4h-4M4 8h4V4H4z"></svg:path>`,
})
export class MdiAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAppsBoxIcon],svg[mdi-apps-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 4v2h2V7zm4 0v2h2V7zm4 0v2h2V7zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class MdiAppsBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchIcon],svg[mdi-arch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.89 2.18-1.43 3.61-2.42 5.73c.61.64 1.35 1.39 2.56 2.24c-1.3-.54-2.19-1.07-2.85-1.63C8 11 6.03 14.75 2 22c3.17-1.83 5.63-2.96 7.92-3.39c-.1-.42-.16-.88-.15-1.36v-.1c.05-2.03 1.11-3.59 2.36-3.48c1.25.1 2.22 1.83 2.17 3.87c-.01.38-.05.75-.12 1.09c2.26.44 4.69 1.56 7.82 3.37c-.62-1.14-1.17-2.16-1.69-3.13c-.81-.64-1.7-1.48-3.46-2.37c1.21.3 2.08.66 2.76 1.07C14.26 7.62 13.83 6.3 12 2"></svg:path>`,
})
export class MdiArchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveIcon],svg[mdi-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v4H3zm1 5h16v13H4zm5.5 3a.5.5 0 0 0-.5.5V13h6v-1.5a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class MdiArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveAlertIcon],svg[mdi-archive-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h16v3H2zm1 4h14v12H3zm4.5 3c-.28 0-.5.22-.5.5V13h6v-1.5c0-.28-.22-.5-.5-.5zM20 13V7h2v6zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiArchiveAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveAlertOutlineIcon],svg[mdi-archive-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h16v3H2zm5.5 7h5c.28 0 .5.22.5.5V13H7v-1.5c0-.28.22-.5.5-.5M20 13V7h2v6zm0 4v-2h2v2zM3 8h2v10h10V8h2v12H3z"></svg:path>`,
})
export class MdiArchiveAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveArrowDownIcon],svg[mdi-archive-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v4H3zm1 18V8h16v13zm10-7v-3h-4v3H7l5 5l5-5z"></svg:path>`,
})
export class MdiArchiveArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveArrowDownOutlineIcon],svg[mdi-archive-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4V10h2v9h12v-9h2zM3 3h18v6H3zm2 2v2h14V5m-8.5 6v3H8l4 4l4-4h-2.5v-3"></svg:path>`,
})
export class MdiArchiveArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveArrowUpIcon],svg[mdi-archive-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h16V8H4m10 7v3h-4v-3H7l5-5l5 5M3 3h18v4H3"></svg:path>`,
})
export class MdiArchiveArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveArrowUpOutlineIcon],svg[mdi-archive-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4V10h2v9h12v-9h2zM3 3h18v6H3zm2 2v2h14V5m-8.5 12v-3H8l4-4l4 4h-2.5v3"></svg:path>`,
})
export class MdiArchiveArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveCancelIcon],svg[mdi-archive-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 12c.5 0 1 .07 1.5.18V8H4v13h8.5a6.5 6.5 0 0 1 6-9M9 13v-1.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V13zm12-6H3V3h18zm-2.5 7C16 14 14 16 14 18.5s2 4.5 4.5 4.5s4.5-2 4.5-4.5s-2-4.5-4.5-4.5m0 7.5c-1.66 0-3-1.34-3-3c0-.56.15-1.08.42-1.5L20 21.08c-.42.27-.94.42-1.5.42m2.58-1.5L17 15.92c.42-.27.94-.42 1.5-.42c1.66 0 3 1.34 3 3c0 .56-.15 1.08-.42 1.5"></svg:path>`,
})
export class MdiArchiveCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveCancelOutlineIcon],svg[mdi-archive-cancel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 11c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5zm4 1c.5 0 1 .07 1.5.18V10h-2v2.03c.17-.03.33-.03.5-.03M6 19v-9H4v11h8.5c-.26-.62-.41-1.3-.47-2zM21 9H3V3h18zm-2-4H5v2h14zm4 13.5c0 2.5-2 4.5-4.5 4.5S14 21 14 18.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5m-3 2.58L15.92 17c-.27.42-.42.94-.42 1.5c0 1.66 1.34 3 3 3c.56 0 1.08-.15 1.5-.42m1.5-2.58c0-1.66-1.34-3-3-3c-.56 0-1.08.15-1.5.42L21.08 20c.27-.42.42-.94.42-1.5"></svg:path>`,
})
export class MdiArchiveCancelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveCheckIcon],svg[mdi-archive-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V8H4v13h9.35c-.22-.63-.35-1.3-.35-2c0-3.31 2.69-6 6-6M9 13v-1.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V13zm12-6H3V3h18zm1.5 10.25L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiArchiveCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveCheckOutlineIcon],svg[mdi-archive-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v6h18zm-2 4H5V5h14zm-4.5 4c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5zm3.5 2.09V10h2v3.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09M13 19c0 .7.13 1.37.35 2H4V10h2v9zm9.5-1.75L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiArchiveCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveClockIcon],svg[mdi-archive-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H2V2h18zm-3.5 6H15v5l3.61 2.16l.75-1.22l-2.86-1.69zm6.5 4c0 3.87-3.13 7-7 7c-2.38 0-4.47-1.19-5.74-3H3V7h16v2.68c2.36 1.13 4 3.53 4 6.32M8 12h2.26c.57-.81 1.3-1.5 2.15-2H8.5c-.28 0-.5.22-.5.5zm13 4c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"></svg:path>`,
})
export class MdiArchiveClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveClockOutlineIcon],svg[mdi-archive-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H2v6h18zm-2 4H4V4h14zm-2 3c-1.31 0-2.54.37-3.59 1H8.5c-.28 0-.5.22-.5.5V12h2.26A6.94 6.94 0 0 0 9 16c0 .7.11 1.37.29 2H5V9H3v11h7.26c1.27 1.81 3.36 3 5.74 3c3.87 0 7-3.13 7-7s-3.13-7-7-7m0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m.5-4.75l2.86 1.69l-.75 1.22L15 17v-5h1.5z"></svg:path>`,
})
export class MdiArchiveClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveCogIcon],svg[mdi-archive-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3V3h18zm-9 12c0 .7.11 1.37.3 2H4V8h16v4.08c-.33-.05-.66-.08-1-.08c-3.87 0-7 3.13-7 7m3-6v-1.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5V13zm8.8 7.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiArchiveCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveCogOutlineIcon],svg[mdi-archive-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12.08V10h2v2.08c-.33-.05-.66-.08-1-.08s-.67.03-1 .08M9.5 11c-.28 0-.5.22-.5.5V13h6v-1.5c0-.28-.22-.5-.5-.5zM6 19v-9H4v11h8.3c-.19-.63-.3-1.3-.3-2zM21 9H3V3h18zm-2-4H5v2h14zm4.8 15.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiArchiveCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveEditIcon],svg[mdi-archive-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10.3V8H4v13h7v-1.87l8.39-8.39c.18-.18.39-.32.61-.44M15 13H9v-1.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5zm6-6H3V3h18zm1.85 7.19l-.98.98l-2.04-2.04l.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72m-3.72-.36l2.04 2.04L15.04 22H13v-2.04z"></svg:path>`,
})
export class MdiArchiveEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveEditOutlineIcon],svg[mdi-archive-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12.13V10h2v.3c-.22.12-.43.26-.61.44zM9.5 11c-.28 0-.5.22-.5.5V13h6v-1.5c0-.28-.22-.5-.5-.5zM6 10H4v11h7v-1.87l.13-.13H6zm15-1H3V3h18zm-2-4H5v2h14zm-6 14.96V22h2.04l6.13-6.12l-2.04-2.05zm9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"></svg:path>`,
})
export class MdiArchiveEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveEyeIcon],svg[mdi-archive-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3V3h18zM9.14 19.75c.18.44.4.86.64 1.25H4V8h16v5.55c-.94-.36-1.95-.55-3-.55c-3.5 0-6.57 2.06-7.86 5.25l-.29.75zM9 13h6v-1.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5zm8 5c-.56 0-1 .44-1 1s.44 1 1 1s1-.44 1-1s-.44-1-1-1m6 1c-.94 2.34-3.27 4-6 4s-5.06-1.66-6-4c.94-2.34 3.27-4 6-4s5.06 1.66 6 4m-3.5 0a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class MdiArchiveEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveEyeOutlineIcon],svg[mdi-archive-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 11c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5zm5.5 2.55V10h-2v3.06c.69.08 1.36.25 2 .49M21 9H3V3h18zm-2-4H5v2h14zM8.85 19H6v-9H4v11h5.78c-.24-.39-.46-.81-.64-1.25zM17 18c-.56 0-1 .44-1 1s.44 1 1 1s1-.44 1-1s-.44-1-1-1m6 1c-.94 2.34-3.27 4-6 4s-5.06-1.66-6-4c.94-2.34 3.27-4 6-4s5.06 1.66 6 4m-3.5 0a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class MdiArchiveEyeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveLockIcon],svg[mdi-archive-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3V3h18zM9.5 11h5c.28 0 .5.22.5.5v.56A4.92 4.92 0 0 1 19 10c.34 0 .68.04 1 .11V8H4v13h9.03c-.03-.1-.03-.2-.03-.3v-3.5c0-.96.5-1.86 1.2-2.46v-.24c0-.5.12-1.03.3-1.5H9v-1.5c0-.28.22-.5.5-.5M23 17.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiArchiveLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveLockOpenIcon],svg[mdi-archive-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3V3h18zm-2 2c.34 0 .68.04 1 .11V8H4v13h9.03c-.03-.1-.03-.2-.03-.3v-3.5c0-.96.5-1.86 1.2-2.46V13.5c0-.17.04-.33.06-.5H9v-1.5c0-.28.22-.5.5-.5h5c.17 0 .32.09.41.22A4.89 4.89 0 0 1 19 9m2.8 7h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiArchiveLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveLockOpenOutlineIcon],svg[mdi-archive-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 11c.17 0 .32.09.41.22c-.35.54-.57 1.14-.65 1.78H9v-1.5c0-.28.22-.5.5-.5zM13 19H6v-9H4v11h9.03c-.03-.1-.03-.2-.03-.3zm8-10H3V3h18zm-2-4H5v2h14zm2.8 11h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiArchiveLockOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveLockOutlineIcon],svg[mdi-archive-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12.06c-.21.29-.36.61-.5.94H9v-1.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5zM21 9H3V3h18zm-2-4H5v2h14zm-6 14H6v-9H4v11h9.03c-.03-.1-.03-.2-.03-.3zm10-1.7v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiArchiveLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveMarkerIcon],svg[mdi-archive-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3V3h18zm-7.37 6H9v-1.5c0-.28.22-.5.5-.5h5c.22 0 .4.14.47.33c.96-.83 2.2-1.33 3.53-1.33c.5 0 1 .08 1.5.22V8H4v13h11.19C14.12 19.43 13 17.35 13 15.5c0-.89.23-1.74.63-2.5M22 15.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiArchiveMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveMarkerOutlineIcon],svg[mdi-archive-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 11c.22 0 .4.14.47.33A5.4 5.4 0 0 0 13.63 13H9v-1.5c0-.28.22-.5.5-.5zM21 9H3V3h18zm-2-4H5v2h14zM6 19v-9H4v11h11.19c-.41-.6-.83-1.28-1.19-2zm16-3.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiArchiveMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveMinusIcon],svg[mdi-archive-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V8H4v13h9.35c-.22-.63-.35-1.3-.35-2c0-3.31 2.69-6 6-6M9 13v-1.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V13zm12-6H3V3h18zm2 11v2h-8v-2z"></svg:path>`,
})
export class MdiArchiveMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveMinusOutlineIcon],svg[mdi-archive-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .7.13 1.37.35 2H4V10h2v9zm6-6c.34 0 .67.04 1 .09V10h-2v3.09c.33-.05.66-.09 1-.09m-9.5-2c-.28 0-.5.22-.5.5V13h6v-1.5c0-.28-.22-.5-.5-.5zM21 9H3V3h18zm-2-4H5v2h14zm-4 13v2h8v-2z"></svg:path>`,
})
export class MdiArchiveMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveMusicIcon],svg[mdi-archive-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 16.11V11H20V8H4v13h9.03c-.03-.16-.03-.33-.03-.5c0-2.14 1.5-3.93 3.5-4.39M9 13v-1.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V13zm12-6H3V3h18zm1 6v2h-2v5.5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 3.5-2.29V13z"></svg:path>`,
})
export class MdiArchiveMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveMusicOutlineIcon],svg[mdi-archive-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v6h18zm-2 4H5V5h14zm-1 4v-1h2v1zm-3.5 0c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5zm-1.24 8c-.17.47-.26.97-.26 1.5c0 .17 0 .34.03.5H4V10h2v9zM22 13v2h-2v5.5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 3.5-2.29V13z"></svg:path>`,
})
export class MdiArchiveMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveOffIcon],svg[mdi-archive-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.2 7l-4-4H21v4zM20 8h-8.8l8.8 8.8zm0 11.35v-.01L8.66 8l-1-1l-5.27-5.27L1.11 3L3 4.89V7h2.11l1 1H4v13h15.11l1.73 1.73l1.27-1.27z"></svg:path>`,
})
export class MdiArchiveOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveOffOutlineIcon],svg[mdi-archive-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.2 5l-2-2H21v6h-8.8l-2-2H19V5zM20 16.8V10h-2v4.8zm0 2.55v-.01l-2-2v.01L9.66 9l-2-2l-1.53-1.53l-3.74-3.74L1.11 3L3 4.89V9h4.11l10 10H6v-9H4v11h15.11l1.73 1.73l1.27-1.27z"></svg:path>`,
})
export class MdiArchiveOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveOutlineIcon],svg[mdi-archive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4V10h2v9h12v-9h2zM3 3h18v6H3zm6.5 8h5c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5M5 5v2h14V5z"></svg:path>`,
})
export class MdiArchiveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchivePlusIcon],svg[mdi-archive-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3V3h18zm-8 12c0 .7.13 1.37.35 2H4V8h16v5.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m2-6v-1.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5V13zm5 5v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiArchivePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchivePlusOutlineIcon],svg[mdi-archive-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13.09V10h2v3.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09M9.5 11c-.28 0-.5.22-.5.5V13h6v-1.5c0-.28-.22-.5-.5-.5zM21 9H3V3h18zm-2-4H5v2h14zM6 19v-9H4v11h9.35c-.22-.63-.35-1.3-.35-2zm14-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiArchivePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveRefreshIcon],svg[mdi-archive-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 12c.5 0 1 .07 1.5.18V8H4v13h8.5a6.5 6.5 0 0 1 6-9M9 13v-1.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V13zm12-6H3V3h18zm-3 11.5l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.11 0 2.11.45 2.83 1.17L22 14.5v4z"></svg:path>`,
})
export class MdiArchiveRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveRefreshOutlineIcon],svg[mdi-archive-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12.03V10h2v2.18c-.5-.11-1-.18-1.5-.18c-.17 0-.33 0-.5.03M9.5 11c-.28 0-.5.22-.5.5V13h6v-1.5c0-.28-.22-.5-.5-.5zM6 19v-9H4v11h8.5c-.26-.62-.41-1.3-.47-2zM21 9H3V3h18zm-2-4H5v2h14zm3 13.5v-4l-1.17 1.17A4 4 0 0 0 18 14.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5z"></svg:path>`,
})
export class MdiArchiveRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveRemoveIcon],svg[mdi-archive-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3V3h18zm-8 12c0 .7.13 1.37.35 2H4V8h16v5.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m2-6v-1.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5V13zm7.54 3.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiArchiveRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveRemoveOutlineIcon],svg[mdi-archive-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13.09V10h2v3.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09M14.5 11h-5c-.28 0-.5.22-.5.5V13h6v-1.5c0-.28-.22-.5-.5-.5M6 19v-9H4v11h9.35c-.22-.63-.35-1.3-.35-2zM21 9H3V3h18zm-2-4H5v2h14zm3.54 11.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiArchiveRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveSearchIcon],svg[mdi-archive-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H2V2h18zm-8.97 6H8v-1.5c0-.28.22-.5.5-.5h4.54c1.8-1.13 4.03-1.3 5.96-.5V7H3v13h8.82c-2.12-2.2-2.38-5.5-.79-8m12.36 9L22 22.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4zM19 15.5a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class MdiArchiveSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveSearchOutlineIcon],svg[mdi-archive-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.04 10q-.6.375-1.14.9c-.33.34-.63.71-.87 1.1H8v-1.5c0-.28.22-.5.5-.5zM20 8H2V2h18zm-2-4H4v2h14zM5 18V9H3v11h8.82a6.4 6.4 0 0 1-1.32-2zm18.39 3L22 22.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4zM19 15.5a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class MdiArchiveSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveSettingsIcon],svg[mdi-archive-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2v4H3V2zM4 7h16v13H4zm5 5h6v-1.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5zM7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z"></svg:path>`,
})
export class MdiArchiveSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveSettingsOutlineIcon],svg[mdi-archive-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2v6h18V2zm16 4H5V4h14zm-1 3h2v11H4V9h2v9h12zm-3 1.5V12H9v-1.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiArchiveSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveStarIcon],svg[mdi-archive-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3V3h18zm-8 12c0 .7.13 1.37.35 2H4V8h16v5.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m2-6v-1.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5V13zm8 4.89l-2.89-.25L19 15l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81l2.5-1.49l2.45 1.49l-.65-2.81z"></svg:path>`,
})
export class MdiArchiveStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveStarOutlineIcon],svg[mdi-archive-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13.09V10h2v3.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09M9.5 11c-.28 0-.5.22-.5.5V13h6v-1.5c0-.28-.22-.5-.5-.5zM6 19v-9H4v11h9.35c-.22-.63-.35-1.3-.35-2zM21 9H3V3h18zm-2-4H5v2h14zm4 12.89l-2.89-.25L19 15l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81l2.5-1.49l2.45 1.49l-.65-2.81z"></svg:path>`,
})
export class MdiArchiveStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveSyncIcon],svg[mdi-archive-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3V3h18zM9.5 11h5c.28 0 .5.22.5.5v1.32A6.44 6.44 0 0 1 19.5 11c.17 0 .34 0 .5.03V8H4v13h10.03A6.4 6.4 0 0 1 13 17.5c0-1.75.69-3.33 1.82-4.5H9v-1.5c0-.28.22-.5.5-.5m9.5 2.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5z"></svg:path>`,
})
export class MdiArchiveSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveSyncOutlineIcon],svg[mdi-archive-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11.18V10h2v1.03c-.16-.03-.33-.03-.5-.03c-.5 0-1 .07-1.5.18m-3 .32c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5V13h5.82l.18-.18zM6 19v-9H4v11h10.03c-.39-.61-.68-1.28-.85-2zM21 9H3V3h18zm-2-4H5v2h14zm0 8.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5z"></svg:path>`,
})
export class MdiArchiveSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArmFlexIcon],svg[mdi-arm-flex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18.34S4 7.09 7 3l5 1l-1 3.09H9v7.16h1c2-3.07 6.14-4.19 8.64-3.07c3.3 1.53 3 6.14 0 8.18C16.24 21 9 22.43 3 18.34"></svg:path>`,
})
export class MdiArmFlexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArmFlexOutlineIcon],svg[mdi-arm-flex-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7.76v8.49h4.08l.6-.91c1.16-1.79 3.25-2.59 4.79-2.59c.53 0 .98.09 1.32.25c.91.41 1.16 1.18 1.21 1.74c.08 1.13-.5 2.29-1.5 2.97c-.9.62-3.06 1.29-5.63 1.29c-1.75 0-4.26-.31-6.75-1.7c.29-2.45.88-6.42 1.88-9.54M7 3C4 7.09 3 18.34 3 18.34C5.9 20.31 9.08 21 11.87 21c2.99 0 5.52-.79 6.77-1.64c3-2.04 3.3-6.65 0-8.18c-.64-.29-1.38-.43-2.17-.43c-2.3 0-4.97 1.21-6.47 3.5H9V7.09h2L12 4z"></svg:path>`,
})
export class MdiArmFlexOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrangeBringForwardIcon],svg[mdi-arrange-bring-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h14v14H2zm20 6v14H8v-4h2v2h10V10h-2V8z"></svg:path>`,
})
export class MdiArrangeBringForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrangeBringToFrontIcon],svg[mdi-arrange-bring-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v4H9V4H4v5h2v2H2zm20 11v9h-9v-4h2v2h5v-5h-2v-2zM8 8h8v8H8z"></svg:path>`,
})
export class MdiArrangeBringToFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrangeSendBackwardIcon],svg[mdi-arrange-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h14v14H2zm20 6v14H8v-4h10V8zM4 4v10h10V4z"></svg:path>`,
})
export class MdiArrangeSendBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrangeSendToBackIcon],svg[mdi-arrange-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v9H2zm7 2H4v5h5zm13 9v9h-9v-9zm-7 7h5v-5h-5zm1-12v3h-3V8zm-5 8H8v-3h3z"></svg:path>`,
})
export class MdiArrangeSendToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrowAllIcon],svg[mdi-arrow-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h5l-1.5-1.5l1.42-1.42L21.84 12l-3.92 3.92l-1.42-1.42L18 13h-5v5l1.5-1.5l1.42 1.42L12 21.84l-3.92-3.92L9.5 16.5L11 18v-5H6l1.5 1.5l-1.42 1.42L2.16 12l3.92-3.92L7.5 9.5L6 11h5V6L9.5 7.5L8.08 6.08L12 2.16l3.92 3.92L14.5 7.5L13 6z"></svg:path>`,
})
export class MdiArrowAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomLeftIcon],svg[mdi-arrow-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6.41L17.59 5L7 15.59V9H5v10h10v-2H8.41z"></svg:path>`,
})
export class MdiArrowBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomLeftBoldBoxIcon],svg[mdi-arrow-bottom-left-bold-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zm10.3-5l-2.1-2.1L17 10l-2.8-2.8l-3.8 3.9l-2.2-2.2V16z"></svg:path>`,
})
export class MdiArrowBottomLeftBoldBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomLeftBoldBoxOutlineIcon],svg[mdi-arrow-bottom-left-bold-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16V8.9l2.1 2.1l4.1-3.9L17 10l-4.1 3.9L15 16zm13 3V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2m-2 0H5V5h14z"></svg:path>`,
})
export class MdiArrowBottomLeftBoldBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomLeftBoldOutlineIcon],svg[mdi-arrow-bottom-left-bold-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.36 19.78H4.22V5.64l4.25 4.24l5.65-5.66l5.66 5.66l-5.66 5.66zM6.34 17.66h7.07l-2.12-2.12l5.66-5.66l-2.83-2.83l-5.66 5.66l-2.12-2.12z"></svg:path>`,
})
export class MdiArrowBottomLeftBoldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomLeftThickIcon],svg[mdi-arrow-bottom-left-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.5 5.69l2.81 2.81l-6.37 6.39h4.95v3.42H5.69V7.11h3.43v4.95z"></svg:path>`,
})
export class MdiArrowBottomLeftThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomLeftThinIcon],svg[mdi-arrow-bottom-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.07 19l-2.83-2.82L19 6.42L17.58 5l-9.76 9.76L5 11.94V19Z"></svg:path>`,
})
export class MdiArrowBottomLeftThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomLeftThinCircleOutlineIcon],svg[mdi-arrow-bottom-left-thin-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.03c4.41 0 8.03-3.62 8.03-8.03S16.41 3.97 12 3.97S3.97 7.59 3.97 12s3.62 8.03 8.03 8.03M12 22C6.46 22 2 17.54 2 12S6.46 2 12 2s10 4.46 10 10s-4.46 10-10 10m-1.88-9.53L8 10.36V16h5.64l-2.11-2.12L16.5 8.9l-1.4-1.4"></svg:path>`,
})
export class MdiArrowBottomLeftThinCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomRightIcon],svg[mdi-arrow-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.41L6.41 5L17 15.59V9h2v10H9v-2h6.59z"></svg:path>`,
})
export class MdiArrowBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomRightBoldBoxIcon],svg[mdi-arrow-bottom-right-bold-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2m-3.2-5V8.9L13.7 11L9.8 7.2L7 10l3.8 3.9L8.7 16z"></svg:path>`,
})
export class MdiArrowBottomRightBoldBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomRightBoldBoxOutlineIcon],svg[mdi-arrow-bottom-right-bold-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16H8.9l2.1-2.1L7 10l2.8-2.8l4.1 3.9L16 8.9zM5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5z"></svg:path>`,
})
export class MdiArrowBottomRightBoldBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
