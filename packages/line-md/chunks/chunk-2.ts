import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdTelegramIcon],svg[line-md-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M21 5l-2.5 15M21 5l-12 8.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M21 5l-19 7.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M18.5 20l-9.5 -6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M2 12.5l7 1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 16l-3 3M9 13.5l0 5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTelegramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTextBoxIcon],svg[line-md-text-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 8h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 12h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M8 16h5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTextBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTextBoxMultipleIcon],svg[line-md-text-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M10 6h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M10 10h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M10 14h5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M2 6v15c0 0.55 0.45 1 1 1h15"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.5s" values="36;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTextBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTextBoxMultipleToTextBoxTransitionIcon],svg[line-md-text-box-multiple-to-text-box-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 6h8M10 10h8M10 14h5M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M10 6h8M10 10h8M10 14h5M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z;M8 8h8M8 12h8M8 16h5M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"></svg:animate></svg:path><svg:path stroke-dasharray="36" d="M2 6v15c0 0.55 0.45 1 1 1h15"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="0;36"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTextBoxMultipleToTextBoxTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTextBoxMultipleTwotoneIcon],svg[line-md-text-box-multiple-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M10 6h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M10 10h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M10 14h5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M2 6v15c0 0.55 0.45 1 1 1h15"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.5s" values="36;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTextBoxMultipleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTextBoxMultipleTwotoneToTextBoxTwotoneTransitionIcon],svg[line-md-text-box-multiple-twotone-to-text-box-twotone-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity=".3" d="M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z;M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"></svg:animate></svg:path><svg:path d="M10 6h8M10 10h8M10 14h5"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M10 6h8M10 10h8M10 14h5;M8 8h8M8 12h8M8 16h5"></svg:animate></svg:path><svg:path stroke-dasharray="36" d="M2 6v15c0 0.55 0.45 1 1 1h15"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="0;36"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTextBoxMultipleTwotoneToTextBoxTwotoneTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTextBoxToTextBoxMultipleTransitionIcon],svg[line-md-text-box-to-text-box-multiple-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 8h8M8 12h8M8 16h5M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M8 8h8M8 12h8M8 16h5M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z;M10 6h8M10 10h8M10 14h5M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M2 6v15c0 0.55 0.45 1 1 1h15"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.5s" values="36;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTextBoxToTextBoxMultipleTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTextBoxTwotoneIcon],svg[line-md-text-box-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 8h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 12h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M8 16h5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTextBoxTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTextBoxTwotoneToTextBoxMultipleTwotoneTransitionIcon],svg[line-md-text-box-twotone-to-text-box-multiple-twotone-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity=".3" d="M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z;M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"></svg:animate></svg:path><svg:path d="M8 8h8M8 12h8M8 16h5"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M8 8h8M8 12h8M8 16h5;M10 6h8M10 10h8M10 14h5"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M2 6v15c0 0.55 0.45 1 1 1h15"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.5s" values="36;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTextBoxTwotoneToTextBoxMultipleTwotoneTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdThumbsDownIcon],svg[line-md-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="80" stroke-dashoffset="80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4h11l3 7v3h-7l1 6l-3 1l-5 -8h-4v-9h4v9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="80;0"></svg:animate></svg:path>`,
})
export class LineMdThumbsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdThumbsDownFilledIcon],svg[line-md-thumbs-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M3 4h4v9h-4v-9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="80" stroke-dashoffset="80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4h11l3 7v3h-7l1 6l-3 1l-5 -8h-4v-9h4v9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="80;0"></svg:animate></svg:path>`,
})
export class LineMdThumbsDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdThumbsDownTwotoneIcon],svg[line-md-thumbs-down-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M3 4h4v9h-4v-9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="80" stroke-dashoffset="80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4h11l3 7v3h-7l1 6l-3 1l-5 -8h-4v-9h4v9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="80;0"></svg:animate></svg:path>`,
})
export class LineMdThumbsDownTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdThumbsUpIcon],svg[line-md-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="80" stroke-dashoffset="80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5 -8l3 1l-1 6h7v3l-3 7h-11h-4v-9h4v9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="80;0"></svg:animate></svg:path>`,
})
export class LineMdThumbsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdThumbsUpFilledIcon],svg[line-md-thumbs-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M7 11v9h-4v-9h4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="80" stroke-dashoffset="80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5 -8l3 1l-1 6h7v3l-3 7h-11h-4v-9h4v9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="80;0"></svg:animate></svg:path>`,
})
export class LineMdThumbsUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdThumbsUpTwotoneIcon],svg[line-md-thumbs-up-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M7 11v9h-4v-9h4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="80" stroke-dashoffset="80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5 -8l3 1l-1 6h7v3l-3 7h-11h-4v-9h4v9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="80;0"></svg:animate></svg:path>`,
})
export class LineMdThumbsUpTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTiktokIcon],svg[line-md-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdTiktok0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" stroke="none" d="M16.6 5.82c-0.68 -0.78 -1.06 -1.78 -1.06 -2.82h-3.09v12.4c-0.02 0.67 -0.31 1.31 -0.79 1.77c-0.48 0.47 -1.13 0.73 -1.8 0.73c-1.42 0 -2.6 -1.16 -2.6 -2.6c0 -1.72 1.66 -3.01 3.37 -2.48v-3.16c-3.45 -0.46 -6.47 2.22 -6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69 -2.55 5.69 -5.7v-6.29c1.25 0.9 2.76 1.38 4.3 1.38v-3.09c0 0 -1.88 0.09 -3.24 -1.48Z"></svg:path><svg:path stroke="#000" stroke-dasharray="36" stroke-dashoffset="72" stroke-width="4" d="M11 11h-1c-2.21 0 -4.5 1.79 -4.5 4c0 2.21 1.5 4.5 4.5 4.5c2.21 0 4 -2.29 4 -4.5v-12.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;36"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="10" stroke-dashoffset="20" stroke-width="4" d="M18 2.5v8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.1s" values="20;10"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdTiktok0)"></svg:rect>`,
})
export class LineMdTiktokIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTrashIcon],svg[line-md-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M12 20h5c0.5 0 1 -0.5 1 -1v-14M12 20h-5c-0.5 0 -1 -0.5 -1 -1v-14"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4 5h16"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 4h4M10 9v7M14 9v7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTurnLeftIcon],svg[line-md-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M16 19v-8c0 -0.55 -0.45 -1 -1 -1h-11"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M4 10l3 -3M4 10l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTurnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTurnRightIcon],svg[line-md-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M8 19v-8c0 -0.55 0.45 -1 1 -1h11"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M20 10l-3 -3M20 10l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTurnSharpLeftIcon],svg[line-md-turn-sharp-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M17 20v-5c0 -0.55 -0.45 -1 -1 -1h-8c-0.55 0 -1 -0.45 -1 -1v-9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M7 4l-3 3M7 4l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTurnSharpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTurnSharpRightIcon],svg[line-md-turn-sharp-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M7 20v-5c0 -0.55 0.45 -1 1 -1h8c0.55 0 1 -0.45 1 -1v-9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M17 4l3 3M17 4l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTurnSharpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTurnSlightLeftIcon],svg[line-md-turn-slight-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M14 19v-7l-7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M7 5h4M7 5v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTurnSlightLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTurnSlightRightIcon],svg[line-md-turn-slight-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M10 19v-7l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M17 5h-4M17 5v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTurnSlightRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTwitterIcon],svg[line-md-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.89 7.34c-0.09 0.33 -0.49 1.16 -1.17 1.95c-0.45 8.68 -8.87 11.5 -14.64 8.59c-0.79 -1.05 2.85 -0.62 4.18 -2.63c-5.03 -2.57 -4.63 -9.44 -3.62 -9.16c2.37 3.19 6.19 3.48 6.81 3.19c0 -0.73 -0.31 -2.32 1.41 -3.65c0.99 -0.71 3.06 -1.34 4.93 0.69c0.32 0.21 0.78 0.3 1.47 0.15c0.41 -0.21 0.95 -0.07 0.67 0.66Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path>`,
})
export class LineMdTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTwitterFilledIcon],svg[line-md-twitter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.89 7.34c-0.09 0.33 -0.49 1.16 -1.17 1.95c-0.45 8.68 -8.87 11.5 -14.64 8.59c-0.79 -1.05 2.85 -0.62 4.18 -2.63c-5.03 -2.57 -4.63 -9.44 -3.62 -9.16c2.37 3.19 6.19 3.48 6.81 3.19c0 -0.73 -0.31 -2.32 1.41 -3.65c0.99 -0.71 3.06 -1.34 4.93 0.69c0.32 0.21 0.78 0.3 1.47 0.15c0.41 -0.21 0.95 -0.07 0.67 0.66Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path>`,
})
export class LineMdTwitterFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTwitterTwotoneIcon],svg[line-md-twitter-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.89 7.34c-0.09 0.33 -0.49 1.16 -1.17 1.95c-0.45 8.68 -8.87 11.5 -14.64 8.59c-0.79 -1.05 2.85 -0.62 4.18 -2.63c-5.03 -2.57 -4.63 -9.44 -3.62 -9.16c2.37 3.19 6.19 3.48 6.81 3.19c0 -0.73 -0.31 -2.32 1.41 -3.65c0.99 -0.71 3.06 -1.34 4.93 0.69c0.32 0.21 0.78 0.3 1.47 0.15c0.41 -0.21 0.95 -0.07 0.67 0.66Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path>`,
})
export class LineMdTwitterTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTwitterXIcon],svg[line-md-twitter-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"></svg:animate></svg:path><svg:path d="M3 2h5v0h-5zM16 22h5v0h-5z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"></svg:animate></svg:path><svg:path d="M18.5 2h3.5L22 2h-3.5z"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTwitterXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdTwitterXAltIcon],svg[line-md-twitter-x-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z"><svg:animate fill="freeze" attributeName="d" dur="0.8s" keyTimes="0;0.3;0.5;1" values="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5zM3 2h5v2h-5zM16 20h5v2h-5zM18.5 2h3.5L5 22h-3.5z"></svg:animate></svg:path>`,
})
export class LineMdTwitterXAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUTurnLeftIcon],svg[line-md-u-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M17 20v-11c0 -2.76 -2.24 -5 -5 -5c-2.76 0 -5 2.24 -5 5v7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M7 16l-3 -3M7 16l3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUTurnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUTurnRightIcon],svg[line-md-u-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M7 20v-11c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M17 16l3 -3M17 16l-3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadIcon],svg[line-md-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadLoopIcon],svg[line-md-upload-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUploadLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadOffIcon],svg[line-md-upload-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdUploadOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M1 13h22" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdUploadOff0)"></svg:rect>`,
})
export class LineMdUploadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadOffLoopIcon],svg[line-md-upload-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdUploadOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdUploadOffLoop0)"></svg:rect>`,
})
export class LineMdUploadOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadOffOutlineIcon],svg[line-md-upload-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdUploadOffOutline0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M1 13h22" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdUploadOffOutline0)"></svg:rect>`,
})
export class LineMdUploadOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadOffOutlineLoopIcon],svg[line-md-upload-off-outline-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdUploadOffOutlineLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdUploadOffOutlineLoop0)"></svg:rect>`,
})
export class LineMdUploadOffOutlineLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadOffTwotoneIcon],svg[line-md-upload-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdUploadOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M1 13h22" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdUploadOffTwotone0)"></svg:rect>`,
})
export class LineMdUploadOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadOffTwotoneLoopIcon],svg[line-md-upload-off-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdUploadOffTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdUploadOffTwotoneLoop0)"></svg:rect>`,
})
export class LineMdUploadOffTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadOutlineIcon],svg[line-md-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUploadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadOutlineLoopIcon],svg[line-md-upload-outline-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUploadOutlineLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadTwotoneIcon],svg[line-md-upload-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUploadTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadTwotoneLoopIcon],svg[line-md-upload-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUploadTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadingIcon],svg[line-md-uploading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate><svg:set fill="freeze" attributeName="stroke-dasharray" begin="0.8s" to="2 4"></svg:set></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M12 16v-7.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUploadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadingLoopIcon],svg[line-md-uploading-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M12 16v-7.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUploadingLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdValignBaselineIcon],svg[line-md-valign-baseline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" stroke-width="1" d="M2.5 11.5h19M2.5 18.5h19"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 6h6v12h-12v-12z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="56;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdValignBaselineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdValignBaselineTwotoneIcon],svg[line-md-valign-baseline-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" stroke-width="1" d="M2.5 11.5h19M2.5 18.5h19"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 6h6v12h-12v-12z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="56;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdValignBaselineTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdValignBottomIcon],svg[line-md-valign-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" stroke-width="1" d="M2.5 8.5h19M2.5 15.5h19"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 9h6v12h-12v-12z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="56;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdValignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdValignBottomTwotoneIcon],svg[line-md-valign-bottom-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" stroke-width="1" d="M2.5 8.5h19M2.5 15.5h19"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 9h6v12h-12v-12z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="56;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdValignBottomTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdValignMiddleIcon],svg[line-md-valign-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" stroke-width="1" d="M2.5 8.5h19M2.5 15.5h19"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 6h6v12h-12v-12z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="56;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdValignMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdValignMiddleTwotoneIcon],svg[line-md-valign-middle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" stroke-width="1" d="M2.5 8.5h19M2.5 15.5h19"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 6h6v12h-12v-12z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="56;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdValignMiddleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdValignTopIcon],svg[line-md-valign-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" stroke-width="1" d="M2.5 8.5h19M2.5 15.5h19"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 3h6v12h-12v-12z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="56;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdValignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdValignTopTwotoneIcon],svg[line-md-valign-top-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" stroke-width="1" d="M2.5 8.5h19M2.5 15.5h19"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 3h6v12h-12v-12z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="56;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdValignTopTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeHighIcon],svg[line-md-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 12c0 0 0 0 0 0c0 0 0 0 0 0Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M14 12c0 0 0 0 0 0c0 0 0 0 0 0Z;M14 16c1.5 -0.71 2.5 -2.24 2.5 -4c0 -1.77 -1 -3.26 -2.5 -4Z"></svg:animate></svg:path><svg:path d="M14 12c0 0 0 0 0 0c0 0 0 0 0 0v0c0 0 0 0 0 0c0 0 0 0 0 0Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M14 12c0 0 0 0 0 0c0 0 0 0 0 0v0c0 0 0 0 0 0c0 0 0 0 0 0Z;M14 3.23c4 0.91 7 4.49 7 8.77c0 4.28 -3 7.86 -7 8.77v-2.07c2.89 -0.86 5 -3.53 5 -6.7c0 -3.17 -2.11 -5.85 -5 -6.71Z"></svg:animate></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path>`,
})
export class LineMdVolumeHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeHighFilledIcon],svg[line-md-volume-high-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 12c0 0 0 0 0 0c0 0 0 0 0 0Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M14 12c0 0 0 0 0 0c0 0 0 0 0 0Z;M14 16c1.5 -0.71 2.5 -2.24 2.5 -4c0 -1.77 -1 -3.26 -2.5 -4Z"></svg:animate></svg:path><svg:path d="M14 12c0 0 0 0 0 0c0 0 0 0 0 0v0c0 0 0 0 0 0c0 0 0 0 0 0Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M14 12c0 0 0 0 0 0c0 0 0 0 0 0v0c0 0 0 0 0 0c0 0 0 0 0 0Z;M14 3.23c4 0.91 7 4.49 7 8.77c0 4.28 -3 7.86 -7 8.77v-2.07c2.89 -0.86 5 -3.53 5 -6.7c0 -3.17 -2.11 -5.85 -5 -6.71Z"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path>`,
})
export class LineMdVolumeHighFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeHighTwotoneIcon],svg[line-md-volume-high-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 12c0 0 0 0 0 0c0 0 0 0 0 0Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M14 12c0 0 0 0 0 0c0 0 0 0 0 0Z;M14 16c1.5 -0.71 2.5 -2.24 2.5 -4c0 -1.77 -1 -3.26 -2.5 -4Z"></svg:animate></svg:path><svg:path d="M14 12c0 0 0 0 0 0c0 0 0 0 0 0v0c0 0 0 0 0 0c0 0 0 0 0 0Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M14 12c0 0 0 0 0 0c0 0 0 0 0 0v0c0 0 0 0 0 0c0 0 0 0 0 0Z;M14 3.23c4 0.91 7 4.49 7 8.77c0 4.28 -3 7.86 -7 8.77v-2.07c2.89 -0.86 5 -3.53 5 -6.7c0 -3.17 -2.11 -5.85 -5 -6.71Z"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path>`,
})
export class LineMdVolumeHighTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeLowIcon],svg[line-md-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path>`,
})
export class LineMdVolumeLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeLowFilledIcon],svg[line-md-volume-low-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.4s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path>`,
})
export class LineMdVolumeLowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeLowTwotoneIcon],svg[line-md-volume-low-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.4s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path>`,
})
export class LineMdVolumeLowTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeMediumIcon],svg[line-md-volume-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12c0 0 0 0 0 0c0 0 0 0 0 0Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M16 12c0 0 0 0 0 0c0 0 0 0 0 0Z;M16 16c1.5 -0.71 2.5 -2.24 2.5 -4c0 -1.77 -1 -3.26 -2.5 -4Z"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path>`,
})
export class LineMdVolumeMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeMediumFilledIcon],svg[line-md-volume-medium-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12c0 0 0 0 0 0c0 0 0 0 0 0Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M16 12c0 0 0 0 0 0c0 0 0 0 0 0Z;M16 16c1.5 -0.71 2.5 -2.24 2.5 -4c0 -1.77 -1 -3.26 -2.5 -4Z"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path>`,
})
export class LineMdVolumeMediumFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeMediumTwotoneIcon],svg[line-md-volume-medium-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12c0 0 0 0 0 0c0 0 0 0 0 0Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M16 12c0 0 0 0 0 0c0 0 0 0 0 0Z;M16 16c1.5 -0.71 2.5 -2.24 2.5 -4c0 -1.77 -1 -3.26 -2.5 -4Z"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path>`,
})
export class LineMdVolumeMediumTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeMinusIcon],svg[line-md-volume-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M15 12h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdVolumeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeMinusFilledIcon],svg[line-md-volume-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="32" stroke-dashoffset="32" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M15 12h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdVolumeMinusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeMinusTwotoneIcon],svg[line-md-volume-minus-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="32" stroke-dashoffset="32" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M15 12h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdVolumeMinusTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumePlusIcon],svg[line-md-volume-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M15 12h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M18 9v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdVolumePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumePlusFilledIcon],svg[line-md-volume-plus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="32" stroke-dashoffset="32" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M15 12h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M18 9v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdVolumePlusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumePlusTwotoneIcon],svg[line-md-volume-plus-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="32" stroke-dashoffset="32" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M15 12h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M18 9v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdVolumePlusTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeRemoveIcon],svg[line-md-volume-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 10l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M20 10l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdVolumeRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeRemoveFilledIcon],svg[line-md-volume-remove-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="32" stroke-dashoffset="32" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 10l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M20 10l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdVolumeRemoveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeRemoveTwotoneIcon],svg[line-md-volume-remove-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="32" stroke-dashoffset="32" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 10l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M20 10l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdVolumeRemoveTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWatchIcon],svg[line-md-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate fill="freeze" attributeName="r" dur="0.2s" values="0;3"></svg:animate></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><svg:animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z"></svg:animate></svg:path>`,
})
export class LineMdWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWatchLoopIcon],svg[line-md-watch-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate attributeName="r" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="0;3;3;0"></svg:animate></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><svg:animate attributeName="d" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"></svg:animate></svg:path>`,
})
export class LineMdWatchLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWatchOffIcon],svg[line-md-watch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdWatchOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><svg:animate fill="freeze" attributeName="r" dur="0.2s" values="0;3"></svg:animate></svg:circle><svg:path d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><svg:animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOff0)"></svg:rect>`,
})
export class LineMdWatchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWatchOffLoopIcon],svg[line-md-watch-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdWatchOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><svg:animate attributeName="r" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="0;3;3;0"></svg:animate></svg:circle><svg:path d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><svg:animate attributeName="d" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h24" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-1 13h24;M1 13h24;M-1 13h24"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOffLoop0)"></svg:rect>`,
})
export class LineMdWatchOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWatchOffTwotoneIcon],svg[line-md-watch-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdWatchOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><svg:animate fill="freeze" attributeName="r" dur="0.2s" values="0;3"></svg:animate></svg:circle><svg:path fill="#fff" fill-opacity="0" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><svg:animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOffTwotone0)"></svg:rect>`,
})
export class LineMdWatchOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWatchOffTwotoneLoopIcon],svg[line-md-watch-off-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdWatchOffTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><svg:animate attributeName="r" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="0;3;3;0"></svg:animate></svg:circle><svg:path fill="#fff" fill-opacity="0" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><svg:animate attributeName="d" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h24" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-1 13h24;M1 13h24;M-1 13h24"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOffTwotoneLoop0)"></svg:rect>`,
})
export class LineMdWatchOffTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWatchTwotoneIcon],svg[line-md-watch-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate fill="freeze" attributeName="r" dur="0.2s" values="0;3"></svg:animate></svg:circle><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><svg:animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdWatchTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWatchTwotoneLoopIcon],svg[line-md-watch-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate attributeName="r" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="0;3;3;0"></svg:animate></svg:circle><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><svg:animate attributeName="d" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdWatchTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWaterIcon],svg[line-md-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="20" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path d="M12 5c0 0 -5 6 -5 9c0 2.76 2.24 5 5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWaterFilledIcon],svg[line-md-water-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -3 5 -9 5 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.4s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-dasharray="20" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path d="M12 5c0 0 -5 6 -5 9c0 2.76 2.24 5 5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdWaterFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWaterOffIcon],svg[line-md-water-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdWaterOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 5c0 0 -5 6 -5 9c0 2.76 2.24 5 5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="24" stroke-dashoffset="24" d="M1 11h22" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M1 13h22" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdWaterOff0)"></svg:rect>`,
})
export class LineMdWaterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWaterOffFilledIcon],svg[line-md-water-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdWaterOffFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 5c0 0 -5 6 -5 9c0 2.76 2.24 5 5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -3 5 -9 5 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.4s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="24" stroke-dashoffset="24" d="M1 11h22" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M1 13h22" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdWaterOffFilled0)"></svg:rect>`,
})
export class LineMdWaterOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWaterOffTwotoneIcon],svg[line-md-water-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdWaterOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 5c0 0 -5 6 -5 9c0 2.76 2.24 5 5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -3 5 -9 5 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.4s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="24" stroke-dashoffset="24" d="M1 11h22" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.55s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M1 13h22" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.55s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdWaterOffTwotone0)"></svg:rect>`,
})
export class LineMdWaterOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWaterTwotoneIcon],svg[line-md-water-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -3 5 -9 5 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.4s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-dasharray="20" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path d="M12 5c0 0 -5 6 -5 9c0 2.76 2.24 5 5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdWaterTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWeatherCloudyLoopIcon],svg[line-md-weather-cloudy-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdWeatherCloudyLoop0"><svg:g fill="#fff"><svg:circle cx="12" cy="11" r="6"><svg:animate attributeName="cx" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="10" height="7" x="8" y="12"></svg:rect><svg:rect width="16" height="10" x="1" y="9" rx="5"><svg:animate attributeName="x" dur="19s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="17" height="8" x="6" y="11" rx="4"><svg:animate attributeName="x" dur="23s" repeatCount="indefinite" values="6;5;6;7;6"></svg:animate></svg:rect></svg:g><svg:circle cx="12" cy="11" r="4"><svg:animate attributeName="cx" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="8" height="6" x="8" y="11"><svg:animate attributeName="x" dur="30s" repeatCount="indefinite" values="8;7;8;9;8"></svg:animate></svg:rect><svg:rect width="12" height="6" x="3" y="11" rx="3"><svg:animate attributeName="x" dur="19s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="13" height="4" x="8" y="13" rx="2"><svg:animate attributeName="x" dur="23s" repeatCount="indefinite" values="8;7;8;9;8"></svg:animate></svg:rect></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdWeatherCloudyLoop0)"></svg:rect>`,
})
export class LineMdWeatherCloudyLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdYoutubeIcon],svg[line-md-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 11L12 12L12 13z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path>`,
})
export class LineMdYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdYoutubeFilledIcon],svg[line-md-youtube-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdYoutubeFilled0"><svg:g fill="none" fill-opacity="0" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" stroke-dasharray="64" stroke-dashoffset="64" d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#000" stroke="none" d="M12 11L12 12L12 13z"><svg:animate fill="freeze" attributeName="d" begin="1.1s" dur="0.2s" values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="1.1s" to="1"></svg:set></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdYoutubeFilled0)"></svg:rect>`,
})
export class LineMdYoutubeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdYoutubeTwotoneIcon],svg[line-md-youtube-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 11L12 12L12 13z"><svg:animate fill="freeze" attributeName="d" begin="0.75s" dur="0.2s" values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.75s" to="1"></svg:set></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path>`,
})
export class LineMdYoutubeTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertIcon],svg[line-md-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3l9 17h-18l9 -17Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertCircleIcon],svg[line-md-alert-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAlertCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAccountAlertIcon],svg[line-md-account-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M5 21v-1c0 -2.21 1.79 -4 4 -4h4c2.21 0 4 1.79 4 4v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M11 13c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M20 3v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M20 11v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAccountAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAccountIcon],svg[line-md-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
