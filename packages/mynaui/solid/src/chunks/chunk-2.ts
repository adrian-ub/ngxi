import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldCrossedSolidIcon],svg[mynaui-shield-crossed-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.582 2.377a.75.75 0 0 1 .836 0l.961.646a11.44 11.44 0 0 0 5.238 1.885A1.26 1.26 0 0 1 19.75 6.16V11c0 3.004-1.929 5.688-3.709 7.544a24 24 0 0 1-3.54 3.022q-.041.03-.064.044l-.017.012l-.005.003l-.002.001L12 21l-.412.627l-.002-.002l-.006-.003l-.017-.012l-.065-.044l-.234-.163a24 24 0 0 1-3.305-2.859C6.179 16.688 4.25 14.004 4.25 11V6.16c0-.647.49-1.188 1.133-1.252a11.44 11.44 0 0 0 5.238-1.885zM12 21l-.412.627a.75.75 0 0 0 .824 0zm-.75-1.488V11.75H5.8c.28 2.125 1.701 4.15 3.241 5.756a23 23 0 0 0 2.209 2.006m7-9.262V6.377a12.94 12.94 0 0 1-5.5-1.973v5.846z"></svg:path>`,
})
export class MynauiShieldCrossedSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldMinusSolidIcon],svg[mynaui-shield-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.226 2.49a1.37 1.37 0 0 1 1.548 0l.61.417a11.3 11.3 0 0 0 5.235 1.92a1.264 1.264 0 0 1 1.131 1.26v4.93c0 2.541-1.335 4.853-2.79 6.63c-1.466 1.793-3.136 3.142-3.977 3.773a1.63 1.63 0 0 1-1.966 0c-.841-.63-2.51-1.98-3.977-3.772c-1.455-1.778-2.79-4.09-2.79-6.63V6.086c0-.64.478-1.194 1.131-1.26a11.3 11.3 0 0 0 5.234-1.92zM10 10.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiShieldMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldOneSolidIcon],svg[mynaui-shield-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.226 2.49a1.37 1.37 0 0 1 1.548 0l.61.417a11.3 11.3 0 0 0 5.235 1.92a1.264 1.264 0 0 1 1.131 1.26v4.93c0 1.604-.532 3.112-1.28 4.443c-1.617 2.88-4.344 5.104-5.485 5.96c-.588.44-1.382.44-1.97 0c-1.141-.856-3.868-3.08-5.486-5.96c-.747-1.33-1.279-2.839-1.279-4.442v-4.93c0-.64.478-1.195 1.131-1.262c1.872-.19 3.67-.85 5.234-1.919zM12 3.777l-.538.368a12.8 12.8 0 0 1-5.712 2.15v4.723c0 1.008.266 2.006.708 2.966l4.545-3.184c.6-.42 1.394-.42 1.994 0l4.545 3.184c.442-.96.708-1.958.708-2.966V6.295a12.8 12.8 0 0 1-5.712-2.15z"></svg:path>`,
})
export class MynauiShieldOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldPlusSolidIcon],svg[mynaui-shield-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.226 2.49l-.61.417a11.3 11.3 0 0 1-5.235 1.92a1.264 1.264 0 0 0-1.131 1.26v4.93c0 2.541 1.335 4.853 2.79 6.63c1.466 1.793 3.136 3.142 3.977 3.773a1.63 1.63 0 0 0 1.966 0c.841-.63 2.511-1.98 3.977-3.772c1.455-1.778 2.79-4.09 2.79-6.63V6.086c0-.64-.478-1.194-1.131-1.26a11.3 11.3 0 0 1-5.234-1.92l-.61-.417a1.37 1.37 0 0 0-1.55 0M12 8.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V13a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V9a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiShieldPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldSlashSolidIcon],svg[mynaui-shield-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.775 2.49a1.37 1.37 0 0 0-1.55 0l-.61.417a11.3 11.3 0 0 1-5.234 1.92a1.264 1.264 0 0 0-1.131 1.26v4.93c0 2.091.904 4.027 2.035 5.637L2.47 20.47a.75.75 0 1 0 1.06 1.06l3.68-3.678c1.423 1.69 2.998 2.961 3.807 3.568a1.63 1.63 0 0 0 1.966 0c.841-.63 2.511-1.98 3.977-3.772c1.455-1.778 2.79-4.09 2.79-6.63V6.086c0-.221-.057-.433-.16-.617l1.94-1.94a.75.75 0 0 0-1.06-1.06L18.168 4.77a11.3 11.3 0 0 1-4.783-1.864z"></svg:path>`,
})
export class MynauiShieldSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldSolidIcon],svg[mynaui-shield-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.775 2.49a1.37 1.37 0 0 0-1.55 0l-.61.417a11.3 11.3 0 0 1-5.234 1.92a1.264 1.264 0 0 0-1.131 1.26v4.93c0 2.541 1.335 4.853 2.79 6.63c1.466 1.793 3.136 3.142 3.977 3.773a1.63 1.63 0 0 0 1.966 0c.841-.63 2.511-1.98 3.977-3.772c1.455-1.778 2.79-4.09 2.79-6.63V6.086c0-.64-.478-1.194-1.131-1.26a11.3 11.3 0 0 1-5.234-1.92z"></svg:path>`,
})
export class MynauiShieldSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldTwoSolidIcon],svg[mynaui-shield-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.582 2.377a.75.75 0 0 1 .836 0l.961.646a11.44 11.44 0 0 0 5.238 1.885A1.26 1.26 0 0 1 19.75 6.16V11c0 3.004-1.929 5.688-3.709 7.544a24 24 0 0 1-3.54 3.022q-.041.03-.064.044l-.017.012l-.005.003l-.002.001h-.827l-.006-.004l-.017-.012l-.065-.044l-.234-.163a24 24 0 0 1-3.305-2.859C6.179 16.688 4.25 14.004 4.25 11V6.16c0-.647.49-1.188 1.133-1.252a11.44 11.44 0 0 0 5.238-1.885zm.006 19.25a.75.75 0 0 0 .824 0zm-.338-2.114V4.403a12.94 12.94 0 0 1-5.5 1.973V11c0 2.396 1.571 4.712 3.291 6.506a23 23 0 0 0 2.209 2.006"></svg:path>`,
})
export class MynauiShieldTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldXSolidIcon],svg[mynaui-shield-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.226 2.49l-.61.417a11.3 11.3 0 0 1-5.235 1.92a1.264 1.264 0 0 0-1.131 1.26v4.93c0 2.541 1.335 4.853 2.79 6.63c1.466 1.793 3.136 3.142 3.977 3.773a1.63 1.63 0 0 0 1.966 0c.841-.63 2.511-1.98 3.977-3.772c1.455-1.778 2.79-4.09 2.79-6.63V6.086c0-.64-.478-1.194-1.131-1.26a11.3 11.3 0 0 1-5.234-1.92l-.61-.417a1.37 1.37 0 0 0-1.55 0M9.97 8.97a.75.75 0 0 1 1.06 0l.884.884l.884-.884a.75.75 0 0 1 1.06 1.06l-.883.884l.884.884a.75.75 0 0 1-1.06 1.06l-.885-.883l-.884.884a.75.75 0 1 1-1.06-1.06l.884-.885l-.884-.884a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiShieldXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShootingStarSolidIcon],svg[mynaui-shooting-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.883 2.47a.75.75 0 0 0-1.06 1.06l2.647 2.647a.75.75 0 1 0 1.06-1.06zM4.59 3.528A.75.75 0 0 0 3.527 4.59l5.824 5.824a.75.75 0 1 0 1.06-1.061zm10.728 4.431a.75.75 0 0 0-1.342 0L11.97 11.97l-4.01 2.006a.75.75 0 0 0 0 1.342l4.011 2.006l2.006 4.011a.75.75 0 0 0 1.342 0l2.006-4.011l4.011-2.006a.75.75 0 0 0 0-1.342l-4.011-2.006zM3.53 8.823a.75.75 0 0 0-1.06 1.06l2.647 2.647a.75.75 0 0 0 1.06-1.06z"></svg:path>`,
})
export class MynauiShootingStarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShoppingBagSolidIcon],svg[mynaui-shopping-bag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.815 5v1.25h.412c1.451 0 2.68 1.101 2.786 2.553l.73 10c.117 1.609-1.182 2.947-2.786 2.947H7.043c-1.604 0-2.903-1.338-2.786-2.947l.73-10C5.093 7.35 6.322 6.25 7.773 6.25h.412V5c0-1.534 1.266-2.75 2.794-2.75h2.043c1.527 0 2.793 1.216 2.793 2.75m-6.13 0v1.25h4.63V5c0-.675-.564-1.25-1.293-1.25h-2.043c-.73 0-1.294.575-1.294 1.25"></svg:path>`,
})
export class MynauiShoppingBagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShuffleAltSolidIcon],svg[mynaui-shuffle-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.485 2.455a.75.75 0 0 1 1.06.03l2 2.118a.75.75 0 0 1 0 1.03l-2 2.117a.75.75 0 0 1-1.06.03V5.869h-.635c-2.707 0-5.1 2.626-5.1 6.132s2.393 6.132 5.1 6.132h.635V16.22a.75.75 0 0 1 1.06.03l2 2.118a.75.75 0 0 1 0 1.03l-2 2.118a.75.75 0 0 1-1.06.03v-1.913h-.635c-2.6 0-4.765-1.696-5.85-4.1c-1.085 2.404-3.25 4.1-5.85 4.1H3a.75.75 0 0 1 0-1.5h3.15c2.707 0 5.1-2.626 5.1-6.132s-2.393-6.132-5.1-6.132H3a.75.75 0 0 1 0-1.5h3.15c2.6 0 4.765 1.696 5.85 4.1c1.085-2.404 3.25-4.1 5.85-4.1h.635z"></svg:path>`,
})
export class MynauiShuffleAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShuffleSolidIcon],svg[mynaui-shuffle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.75 4a.75.75 0 0 1 .75-.75h4.412a.75.75 0 0 1 .75.75v4.444a.75.75 0 0 1-.75.75l-2.017-2.029L4.53 20.53a.75.75 0 0 1-1.06-1.06L16.839 6.1z"></svg:path><svg:path d="M3.47 3.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 1 0 1.06-1.06l-6-6a.75.75 0 0 0-1.06 0m10.002 9.998a.75.75 0 0 1 1.06.004l3.36 3.385L20 14.75a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75l2.082-2.082l-3.364-3.39a.75.75 0 0 1 .004-1.06"></svg:path></svg:g>`,
})
export class MynauiShuffleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSidebarAltSolidIcon],svg[mynaui-sidebar-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m6.383 1.503v16.494a20 20 0 0 0 1.416-.049c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.4c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302a20 20 0 0 0-1.416-.05"></svg:path>`,
})
export class MynauiSidebarAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSidebarSolidIcon],svg[mynaui-sidebar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.834 3.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.392.032.851.044 1.416.05V3.752c-.565.005-1.024.017-1.416.049"></svg:path>`,
})
export class MynauiSidebarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSignalCircleSolidIcon],svg[mynaui-signal-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.5-1.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM12 8.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.75-.75m3.75 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiSignalCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSignalDiamondSolidIcon],svg[mynaui-signal-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.75 10.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM12 8.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.75-.75m3.75 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiSignalDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSignalHexagonSolidIcon],svg[mynaui-signal-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.75 10.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM12 8.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.75-.75m3.75 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiSignalHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSignalOctagonSolidIcon],svg[mynaui-signal-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9.75 10.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM12 8.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.75-.75m3.75 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiSignalOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSignalSolidIcon],svg[mynaui-signal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-4-4a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75m-4.5-3a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m-4.5 3a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75m-4 4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiSignalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSignalSquareSolidIcon],svg[mynaui-signal-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.383 8.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM12 8.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.75-.75m3.75 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiSignalSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSignalWavesSolidIcon],svg[mynaui-signal-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.75 10.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM12 8.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.75-.75m3.75 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiSignalWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSixCircleSolidIcon],svg[mynaui-six-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15.25a1.75 1.75 0 0 1-1.75-1.75c0-.458.171-.729.422-.91c.283-.205.735-.34 1.328-.34s1.045.135 1.328.34c.251.181.422.452.422.91A1.75 1.75 0 0 1 12 15.25"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12.5 7.25A3.75 3.75 0 0 0 8.75 11v2.5a3.25 3.25 0 0 0 6.5 0c0-.923-.389-1.652-1.043-2.125c-.621-.45-1.419-.625-2.207-.625c-.606 0-1.217.103-1.75.355V11a2.25 2.25 0 0 1 2.25-2.25h1a.75.75 0 0 0 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiSixCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSixDiamondSolidIcon],svg[mynaui-six-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15.25a1.75 1.75 0 0 1-1.75-1.75c0-.458.171-.729.422-.91c.283-.205.735-.34 1.328-.34s1.045.135 1.328.34c.251.181.422.452.422.91A1.75 1.75 0 0 1 12 15.25"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m1.71 5.76A3.75 3.75 0 0 0 8.75 11v2.5a3.25 3.25 0 0 0 6.5 0c0-.923-.389-1.652-1.043-2.125c-.621-.45-1.419-.625-2.207-.625c-.606 0-1.217.103-1.75.355V11a2.25 2.25 0 0 1 2.25-2.25h1a.75.75 0 0 0 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiSixDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSixHexagonSolidIcon],svg[mynaui-six-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15.25a1.75 1.75 0 0 1-1.75-1.75c0-.458.171-.729.422-.91c.283-.205.735-.34 1.328-.34s1.045.135 1.328.34c.251.181.422.452.422.91A1.75 1.75 0 0 1 12 15.25"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM12.5 7.25A3.75 3.75 0 0 0 8.75 11v2.5a3.25 3.25 0 0 0 6.5 0c0-.923-.389-1.652-1.043-2.125c-.621-.45-1.419-.625-2.207-.625c-.606 0-1.217.103-1.75.355V11a2.25 2.25 0 0 1 2.25-2.25h1a.75.75 0 0 0 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiSixHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSixOctagonSolidIcon],svg[mynaui-six-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15.25a1.75 1.75 0 0 1-1.75-1.75c0-.458.171-.729.422-.91c.283-.205.735-.34 1.328-.34s1.045.135 1.328.34c.251.181.422.452.422.91A1.75 1.75 0 0 1 12 15.25"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M12.5 7.25A3.75 3.75 0 0 0 8.75 11v2.5a3.25 3.25 0 0 0 6.5 0c0-.923-.389-1.652-1.043-2.125c-.621-.45-1.419-.625-2.207-.625c-.606 0-1.217.103-1.75.355V11a2.25 2.25 0 0 1 2.25-2.25h1a.75.75 0 0 0 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiSixOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSixSolidIcon],svg[mynaui-six-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10.75a4.5 4.5 0 0 1 4.5-4.5h1.25a.75.75 0 0 1 0 1.5H12.5a3 3 0 0 0-3 3v.442c.69-.402 1.53-.567 2.375-.567c.96 0 1.915.213 2.65.745c.766.555 1.225 1.41 1.225 2.505a3.875 3.875 0 0 1-7.75 0zm1.5 3.125a2.375 2.375 0 1 0 4.75 0c0-.63-.24-1.026-.605-1.29c-.396-.286-1.005-.46-1.77-.46s-1.374.174-1.77.46c-.364.264-.605.66-.605 1.29"></svg:path>`,
})
export class MynauiSixSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSixSquareSolidIcon],svg[mynaui-six-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15.25a1.75 1.75 0 0 1-1.75-1.75c0-.458.171-.729.422-.91c.283-.205.735-.34 1.328-.34s1.045.135 1.328.34c.251.181.422.452.422.91A1.75 1.75 0 0 1 12 15.25"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m3.133 5A3.75 3.75 0 0 0 8.75 11v2.5a3.25 3.25 0 0 0 6.5 0c0-.923-.389-1.652-1.043-2.125c-.621-.45-1.419-.625-2.207-.625c-.606 0-1.217.103-1.75.355V11a2.25 2.25 0 0 1 2.25-2.25h1a.75.75 0 0 0 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiSixSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSixWavesSolidIcon],svg[mynaui-six-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15.25a1.75 1.75 0 0 1-1.75-1.75c0-.458.171-.729.422-.91c.283-.205.735-.34 1.328-.34s1.045.135 1.328.34c.251.181.422.452.422.91A1.75 1.75 0 0 1 12 15.25"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M12.5 7.25A3.75 3.75 0 0 0 8.75 11v2.5a3.25 3.25 0 0 0 6.5 0c0-.923-.389-1.652-1.043-2.125c-.621-.45-1.419-.625-2.207-.625c-.606 0-1.217.103-1.75.355V11a2.25 2.25 0 0 1 2.25-2.25h1a.75.75 0 0 0 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiSixWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSkipBackSolidIcon],svg[mynaui-skip-back-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m12.907 1.464c1.146-.917 2.843-.1 2.843 1.367v13.838c0 1.468-1.697 2.284-2.843 1.367l-8.65-6.92a1.75 1.75 0 0 1 0-2.732z"></svg:path>`,
})
export class MynauiSkipBackSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSkipForwardSolidIcon],svg[mynaui-skip-forward-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M3.75 5.08c0-1.467 1.697-2.283 2.843-1.366l8.65 6.92a1.75 1.75 0 0 1 0 2.733l-8.65 6.919c-1.146.917-2.843.1-2.843-1.367z"></svg:path>`,
})
export class MynauiSkipForwardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSlashCircleSolidIcon],svg[mynaui-slash-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m13.28-2.47l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class MynauiSlashCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSlashDiamondSolidIcon],svg[mynaui-slash-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686m4.74 8.04l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class MynauiSlashDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSlashHexagonSolidIcon],svg[mynaui-slash-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0m4.85 7.425l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class MynauiSlashHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSlashOctagonSolidIcon],svg[mynaui-slash-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158H8.937a2.3 2.3 0 0 0-.9.158M15.53 9.53l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class MynauiSlashOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSlashSquareSolidIcon],svg[mynaui-slash-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm6.163 7.28l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class MynauiSlashSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSlashWavesSolidIcon],svg[mynaui-slash-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M15.53 9.53l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class MynauiSlashWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSmileCircleSolidIcon],svg[mynaui-smile-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.148 2.553a.75.75 0 0 0 .155 1.05A5.77 5.77 0 0 0 12 16.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 0 0-.894-1.204A4.27 4.27 0 0 1 12 15.25a4.27 4.27 0 0 1-2.553-.852a.75.75 0 0 0-1.05.155M15.25 10a.75.75 0 1 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM9.5 9.25a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MynauiSmileCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSmileGhostSolidIcon],svg[mynaui-smile-ghost-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12.044v6.517c0 .764.308 1.57.8 2.127c.501.567 1.354 1.012 2.287.543c.696-.35 1.275-.363 1.746-.047c1.126.755 2.708.755 3.834 0c.345-.23.607-.308.825-.31c.218-.001.485.072.84.31c1.127.755 2.709.755 3.835 0c.213-.142.58-.237 1.044-.226c.454.01.898.12 1.202.273c.933.469 1.786.024 2.287-.543c.492-.557.8-1.363.8-2.126v-6.518c0-5.405-4.362-9.794-9.75-9.794s-9.75 4.389-9.75 9.794m6.148 2.51a.75.75 0 0 1 1.049-.156c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 16.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.155-1.049M10.25 10v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 1 1 1.5 0m4.25-.75a.75.75 0 0 1 .75.75v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiSmileGhostSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSmileSquareSolidIcon],svg[mynaui-smile-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm-.97 12.303a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 16.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.155-1.049M10.25 10v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 1 1 1.5 0m4.25-.75a.75.75 0 0 1 .75.75v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiSmileSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSmokeDetectorSolidIcon],svg[mynaui-smoke-detector-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 4A.75.75 0 0 1 6 3.25h12a.75.75 0 0 1 0 1.5h-.62c-.127 1.262-.574 2.465-1.34 3.412c-.93 1.15-2.308 1.89-4.04 1.89s-3.11-.74-4.04-1.89c-.766-.947-1.213-2.15-1.34-3.412H6A.75.75 0 0 1 5.25 4m1.72 7.463a.75.75 0 0 1 1.054.114c.771.958 1.024 1.861.91 2.741c-.103.792-.501 1.484-.815 2.03l-.029.05c-.349.606-.595 1.056-.656 1.524c-.053.404.028.909.59 1.608a.75.75 0 1 1-1.168.94c-.771-.957-1.024-1.861-.91-2.741c.103-.792.501-1.484.815-2.03l.029-.05c.349-.606.595-1.056.656-1.524c.053-.404-.028-.908-.59-1.607a.75.75 0 0 1 .114-1.055m4.56 0a.75.75 0 0 1 1.054.114c.771.958 1.024 1.861.91 2.741c-.103.792-.501 1.484-.815 2.03l-.029.05c-.349.606-.595 1.056-.656 1.524c-.053.404.028.909.59 1.608a.75.75 0 1 1-1.168.94c-.771-.957-1.024-1.861-.91-2.741c.103-.792.501-1.484.815-2.03l.029-.05c.349-.606.595-1.056.656-1.524c.053-.404-.028-.908-.59-1.607a.75.75 0 0 1 .114-1.055m4.56 0a.75.75 0 0 1 1.054.114c.771.958 1.024 1.861.91 2.741c-.103.792-.501 1.484-.815 2.03l-.029.05c-.349.606-.596 1.056-.656 1.524c-.053.404.028.909.59 1.608a.75.75 0 1 1-1.168.94c-.771-.957-1.024-1.861-.91-2.741c.103-.792.501-1.484.815-2.03l.029-.05c.349-.606.596-1.056.656-1.524c.053-.404-.028-.908-.59-1.607a.75.75 0 0 1 .114-1.055"></svg:path>`,
})
export class MynauiSmokeDetectorSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSnowSolidIcon],svg[mynaui-snow-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.417 2.476a.75.75 0 0 1 1.06-.012L12 3.95l1.523-1.487a.75.75 0 0 1 1.048 1.072l-1.821 1.78v5.4L17.563 8l.667-2.43a.75.75 0 0 1 1.446.396l-.548 2l2.062.54a.75.75 0 0 1-.38 1.452l-2.502-.656L13.526 12l4.782 2.698l2.502-.656a.75.75 0 0 1 .38 1.451l-2.062.54l.548 2a.75.75 0 1 1-1.446.397L17.563 16l-4.813-2.716v5.4l1.82 1.78a.75.75 0 1 1-1.047 1.072L12 20.05l-1.523 1.487a.75.75 0 0 1-1.048-1.072l1.82-1.78v-5.4L6.438 16l-.667 2.43a.75.75 0 0 1-1.447-.396l.549-2l-2.062-.54a.75.75 0 1 1 .38-1.452l2.502.656L10.473 12l-4.78-2.698l-2.502.656a.75.75 0 1 1-.38-1.451l2.062-.54l-.549-2A.75.75 0 0 1 5.77 5.57L6.437 8l4.813 2.716v-5.4l-1.821-1.78a.75.75 0 0 1-.012-1.06"></svg:path>`,
})
export class MynauiSnowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSofaSolidIcon],svg[mynaui-sofa-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 9.155V7c0-1.995-1.472-3.75-3.45-3.75h-9C5.522 3.25 4.05 5.005 4.05 7v2.182a3 3 0 0 0-.863.325c-.476.276-.937.768-.937 1.493v4c0 1.995 1.472 3.75 3.45 3.75h1.05V20a.75.75 0 0 0 1.5 0v-1.25h7.5V20a.75.75 0 0 0 1.5 0v-1.25h1.05c1.978 0 3.45-1.755 3.45-3.75v-4c0-.74-.432-1.255-.945-1.544a2.8 2.8 0 0 0-.855-.301M18.3 17.25H5.7c-1.005 0-1.95-.931-1.95-2.25v-4c0-.01-.004-.083.188-.194c.203-.118.522-.204.88-.212s.665.064.852.17c.162.091.18.165.18.236c0 .693.051 1.592.408 2.335c.186.388.464.753.874 1.018c.412.266.905.397 1.468.397h6.8c.563 0 1.056-.131 1.468-.397c.41-.265.688-.63.874-1.018c.357-.743.408-1.643.408-2.336c0-.008-.004-.082.188-.193c.203-.118.522-.204.88-.212s.665.064.852.17c.162.091.18.165.18.236v4c0 1.319-.945 2.25-1.95 2.25"></svg:path>`,
})
export class MynauiSofaSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSortSolidIcon],svg[mynaui-sort-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 7a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 3.75 7m0 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75m0 5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class MynauiSortSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSparklesSolidIcon],svg[mynaui-sparkles-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.195 2.845a.75.75 0 0 0-1.467 0c-.232 1.096-.55 1.835-.99 2.361c-.429.516-1.029.893-1.95 1.166a.75.75 0 0 0 0 1.438c.885.262 1.48.617 1.916 1.125c.444.516.782 1.26 1.024 2.402a.75.75 0 0 0 1.467 0c.242-1.143.58-1.886 1.024-2.402c.436-.508 1.03-.863 1.917-1.125a.75.75 0 0 0 0-1.438c-.886-.262-1.481-.617-1.917-1.125c-.444-.516-.782-1.26-1.024-2.402m8.303 3.251a.75.75 0 0 0-1.458 0c-.554 2.292-1.141 3.674-1.972 4.638c-.82.952-1.947 1.576-3.77 2.192a.75.75 0 0 0 0 1.421c1.904.643 3.046 1.322 3.852 2.292c.819.986 1.362 2.355 1.89 4.537a.75.75 0 0 0 1.458 0c.554-2.291 1.142-3.673 1.972-4.637c.82-.952 1.947-1.576 3.77-2.192a.75.75 0 0 0 0-1.421c-1.907-.644-3.047-1.32-3.852-2.29c-.818-.984-1.36-2.352-1.89-4.54"></svg:path>`,
})
export class MynauiSparklesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSpeakerSolidIcon],svg[mynaui-speaker-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.409 12.409a2.25 2.25 0 1 1 3.182 3.183a2.25 2.25 0 0 1-3.182-3.183"></svg:path><svg:path d="M7.899 2.425c1.049-.175 2.382-.175 4.034-.175h.134c1.652 0 2.985 0 4.034.175c1.104.184 1.99.577 2.671 1.423c.663.822.952 1.85 1.09 3.134C20 8.247 20 9.872 20 11.953v.094c0 2.082 0 3.706-.137 4.971c-.14 1.284-.428 2.312-1.09 3.134c-.682.846-1.568 1.239-2.672 1.423c-1.049.175-2.382.175-4.034.175h-.134c-1.652 0-2.985 0-4.034-.175c-1.104-.184-1.99-.576-2.671-1.422c-.663-.823-.952-1.851-1.09-3.134C4 15.753 4 14.128 4 12.046v-.094c0-2.081 0-3.706.137-4.971c.14-1.284.428-2.312 1.09-3.134c.682-.846 1.568-1.239 2.672-1.423M11.5 6.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm.5 4a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"></svg:path></svg:g>`,
})
export class MynauiSpeakerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSpinnerOneSolidIcon],svg[mynaui-spinner-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M7.125 3.556a.75.75 0 0 1 1.025.275l1.5 2.598a.75.75 0 1 1-1.3.75L6.85 4.58a.75.75 0 0 1 .275-1.025m-3.569 3.57a.75.75 0 0 1 1.025-.275l2.598 1.5a.75.75 0 0 1-.75 1.3L3.83 8.15a.75.75 0 0 1-.275-1.025M2.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m15 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-9.797 2.625a.75.75 0 0 1-.274 1.024l-2.598 1.5a.75.75 0 0 1-.75-1.299l2.598-1.5a.75.75 0 0 1 1.024.275m9.094 0a.75.75 0 0 1 1.024-.275l2.598 1.5a.75.75 0 1 1-.75 1.3l-2.598-1.5a.75.75 0 0 1-.274-1.025m-1.922 1.922a.75.75 0 0 1 1.024.274l1.5 2.598a.75.75 0 0 1-1.299.75l-1.5-2.598a.75.75 0 0 1 .275-1.024m-5.25 0a.75.75 0 0 1 .275 1.024l-1.5 2.598a.75.75 0 0 1-1.3-.75l1.5-2.598a.75.75 0 0 1 1.025-.274M12 17.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiSpinnerOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSpinnerSolidIcon],svg[mynaui-spinner-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m6.896 2.854a.75.75 0 0 1 0 1.06l-2.119 2.12a.75.75 0 0 1-1.06-1.061l2.118-2.119a.75.75 0 0 1 1.06 0M17.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-1.533 3.717a.75.75 0 0 1 1.06 0l2.119 2.118a.75.75 0 0 1-1.06 1.061l-2.12-2.119a.75.75 0 0 1 0-1.06M12 17.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75m-3.717-1.533a.75.75 0 0 1 0 1.06l-2.118 2.119a.75.75 0 1 1-1.06-1.06l2.118-2.12a.75.75 0 0 1 1.06 0M2.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m2.854-6.896a.75.75 0 0 1 1.06 0l2.12 2.119a.75.75 0 0 1-1.061 1.06L5.104 6.165a.75.75 0 0 1 0-1.061"></svg:path>`,
})
export class MynauiSpinnerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSquareDashedSolidIcon],svg[mynaui-square-dashed-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.4 2.25a.75.75 0 0 0 0 1.5h5.2a.75.75 0 0 0 0-1.5zM5.525 4.104a.75.75 0 1 0-.681-1.336a4.75 4.75 0 0 0-2.076 2.076a.75.75 0 1 0 1.336.68a3.25 3.25 0 0 1 1.42-1.42m13.633-1.336a.75.75 0 0 0-.681 1.336a3.25 3.25 0 0 1 1.42 1.42a.75.75 0 1 0 1.336-.68a4.75 4.75 0 0 0-2.075-2.076M3.75 9.4a.75.75 0 0 0-1.5 0v5.2a.75.75 0 0 0 1.5 0zm18 0a.75.75 0 0 0-1.5 0v5.2a.75.75 0 0 0 1.5 0zM4.104 18.476a.75.75 0 1 0-1.336.68a4.75 4.75 0 0 0 2.076 2.076a.75.75 0 0 0 .68-1.336a3.25 3.25 0 0 1-1.42-1.42m17.128.681a.75.75 0 0 0-1.336-.681a3.25 3.25 0 0 1-1.42 1.42a.75.75 0 1 0 .68 1.336a4.75 4.75 0 0 0 2.076-2.075M9.4 20.25a.75.75 0 0 0 0 1.5h5.2a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiSquareDashedSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSquareHalfSolidIcon],svg[mynaui-square-half-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.834 3.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h1.85V3.75H9.4c-1.132 0-1.937 0-2.566.052"></svg:path>`,
})
export class MynauiSquareHalfSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSquareSolidIcon],svg[mynaui-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057z"></svg:path>`,
})
export class MynauiSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiStarSolidIcon],svg[mynaui-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.51 3.139c-.652-1.185-2.368-1.185-3.021 0a28 28 0 0 0-2.114 4.894a.35.35 0 0 1-.33.223a30 30 0 0 0-4.375.436c-1.337.233-1.926 1.837-.91 2.83q.192.188.388.374a32 32 0 0 0 3.103 2.587a.274.274 0 0 1 .11.31a27.6 27.6 0 0 0-1.172 5.065c-.19 1.424 1.318 2.298 2.495 1.694a29.3 29.3 0 0 0 4.085-2.537a.4.4 0 0 1 .462 0a29 29 0 0 0 4.085 2.537c1.177.604 2.685-.27 2.495-1.694a27.6 27.6 0 0 0-1.171-5.065a.274.274 0 0 1 .11-.31a32 32 0 0 0 3.49-2.96c1.016-.994.427-2.598-.91-2.831a30 30 0 0 0-4.376-.436a.35.35 0 0 1-.329-.223a27.7 27.7 0 0 0-2.114-4.894"></svg:path>`,
})
export class MynauiStarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiStopCircleSolidIcon],svg[mynaui-stop-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8.279-3.198c-.424.057-.848.188-1.193.534c-.346.345-.477.769-.534 1.192c-.052.391-.052.876-.052 1.425v.094c0 .549 0 1.034.052 1.425c.057.423.188.847.534 1.192c.345.346.769.477 1.192.534c.391.052.876.052 1.425.052h.095c.548 0 1.033 0 1.424-.052c.423-.057.847-.188 1.192-.534c.346-.345.477-.769.534-1.192c.052-.391.052-.876.052-1.424v-.095c0-.549 0-1.034-.052-1.424c-.057-.424-.188-.848-.534-1.193c-.345-.346-.769-.477-1.192-.534c-.391-.052-.876-.052-1.425-.052h-.094c-.549 0-1.034 0-1.424.052"></svg:path>`,
})
export class MynauiStopCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiStopDiamondSolidIcon],svg[mynaui-stop-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m-.261 7.312c-.424.057-.848.188-1.193.534c-.346.345-.477.769-.534 1.192c-.052.391-.052.876-.052 1.425v.094c0 .549 0 1.034.052 1.425c.057.423.188.847.534 1.192c.345.346.769.477 1.192.534c.391.052.876.052 1.425.052h.095c.548 0 1.033 0 1.424-.052c.423-.057.847-.188 1.192-.534c.346-.345.477-.769.534-1.192c.052-.391.052-.876.052-1.424v-.095c0-.549 0-1.034-.052-1.424c-.057-.424-.188-.848-.534-1.193c-.345-.346-.769-.477-1.192-.534c-.391-.052-.876-.052-1.425-.052h-.094c-.549 0-1.034 0-1.424.052"></svg:path>`,
})
export class MynauiStopDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiStopHexagonSolidIcon],svg[mynaui-stop-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm-.152 6.697c-.423.057-.847.188-1.192.534c-.346.345-.477.769-.534 1.192c-.052.391-.052.876-.052 1.425v.094c0 .549 0 1.034.052 1.425c.057.423.188.847.534 1.192c.345.346.769.477 1.192.534c.391.052.876.052 1.425.052h.095c.548 0 1.033 0 1.424-.052c.423-.057.847-.188 1.192-.534c.346-.345.477-.769.534-1.192c.052-.391.052-.876.052-1.424v-.095c0-.549 0-1.034-.052-1.424c-.057-.424-.188-.848-.534-1.193c-.345-.346-.769-.477-1.192-.534c-.391-.052-.876-.052-1.425-.052h-.094c-.549 0-1.034 0-1.424.052"></svg:path>`,
})
export class MynauiStopHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiStopOctagonSolidIcon],svg[mynaui-stop-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m2.491 6.394c-.423.057-.847.188-1.192.534c-.346.345-.477.769-.534 1.192c-.052.391-.052.876-.052 1.425v.094c0 .549 0 1.034.052 1.425c.057.423.188.847.534 1.192c.345.346.769.477 1.192.534c.391.052.876.052 1.425.052h.095c.548 0 1.033 0 1.424-.052c.423-.057.847-.188 1.192-.534c.346-.345.477-.769.534-1.192c.052-.391.052-.876.052-1.424v-.095c0-.549 0-1.034-.052-1.424c-.057-.424-.188-.848-.534-1.193c-.345-.346-.769-.477-1.192-.534c-.391-.052-.876-.052-1.425-.052h-.094c-.549 0-1.034 0-1.424.052"></svg:path>`,
})
export class MynauiStopOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiStopSolidIcon],svg[mynaui-stop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.945 5.75c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337v.11c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117z"></svg:path>`,
})
export class MynauiStopSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiStopSquareSolidIcon],svg[mynaui-stop-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m1.161 6.552c-.423.057-.847.188-1.192.534c-.346.345-.477.769-.534 1.192c-.052.391-.052.876-.052 1.425v.094c0 .549 0 1.034.052 1.425c.057.423.188.847.534 1.192c.345.346.769.477 1.192.534c.391.052.876.052 1.425.052h.095c.548 0 1.033 0 1.424-.052c.423-.057.847-.188 1.192-.534c.346-.345.477-.769.534-1.192c.052-.391.052-.876.052-1.424v-.095c0-.549 0-1.034-.052-1.424c-.057-.424-.188-.848-.534-1.193c-.345-.346-.769-.477-1.192-.534c-.391-.052-.876-.052-1.425-.052h-.094c-.549 0-1.034 0-1.424.052"></svg:path>`,
})
export class MynauiStopSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiStopWavesSolidIcon],svg[mynaui-stop-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m-.037 6.727c-.423.057-.847.188-1.192.534c-.346.345-.477.769-.534 1.192c-.052.391-.052.876-.052 1.425v.094c0 .549 0 1.034.052 1.425c.057.423.188.847.534 1.192c.345.346.769.477 1.192.534c.391.052.876.052 1.425.052h.095c.548 0 1.033 0 1.424-.052c.423-.057.847-.188 1.192-.534c.346-.345.477-.769.534-1.192c.052-.391.052-.876.052-1.424v-.095c0-.549 0-1.034-.052-1.424c-.057-.424-.188-.848-.534-1.193c-.345-.346-.769-.477-1.192-.534c-.391-.052-.876-.052-1.425-.052h-.094c-.549 0-1.034 0-1.424.052"></svg:path>`,
})
export class MynauiStopWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiStoreSolidIcon],svg[mynaui-store-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.993 2.25h9.959a2.75 2.75 0 0 1 2.66 2.056l1.044 4.007c.247.944-.01 1.771-.57 2.36q-.159.165-.34.3V19a2.75 2.75 0 0 1-2.75 2.75H6.004A2.75 2.75 0 0 1 3.254 19v-8.026q-.181-.135-.34-.302c-.56-.588-.817-1.415-.57-2.36l1.044-4.006a2.75 2.75 0 0 1 2.66-2.056zM12 10.746q-.102.108-.214.205c-.576.496-1.32.725-2.035.725s-1.459-.23-2.035-.725a3 3 0 0 1-.217-.208a2.6 2.6 0 0 1-.35.305c-.65.47-1.463.624-2.204.554a4 4 0 0 1-.19-.023V19c0 .69.559 1.25 1.248 1.25h11.994c.69 0 1.249-.56 1.249-1.25v-7.421q-.096.014-.19.023c-.742.07-1.555-.084-2.204-.554a2.6 2.6 0 0 1-.352-.305a3 3 0 0 1-.216.208c-.576.496-1.32.725-2.035.725s-1.459-.23-2.035-.725a3 3 0 0 1-.214-.205"></svg:path>`,
})
export class MynauiStoreSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSubtractSolidIcon],svg[mynaui-subtract-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 2.25a.75.75 0 0 0-.75.75v1.8a.75.75 0 0 0 1.5 0V3.75H4.8a.75.75 0 0 0 0-1.5zm5.4 0a.75.75 0 0 0 0 1.5h1.8a.75.75 0 0 0 0-1.5zm5.4 0a.75.75 0 0 0 0 1.5h1.05v.6a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-.75-.75zM3.75 8.4a.75.75 0 0 0-1.5 0v1.8a.75.75 0 0 0 1.5 0zm11.85-.75a.75.75 0 0 0-.75.75v1.8a.75.75 0 0 0 1.5 0V9.15c.773 0 1.324.003 1.76.038c.453.037.714.107.912.207c.423.216.767.56.983.984c.1.197.17.458.207.912c.037.462.038 1.056.038 1.909v3c0 .852 0 1.447-.038 1.91c-.038.453-.107.714-.207.912c-.216.423-.56.767-.983.983c-.198.1-.459.17-.913.207c-.462.037-1.057.038-1.909.038h-3c-.852 0-1.447 0-1.91-.038c-.453-.038-.714-.107-.911-.207a2.25 2.25 0 0 1-.984-.983c-.1-.198-.17-.459-.207-.913c-.035-.435-.038-.986-.038-1.759h1.05a.75.75 0 0 0 0-1.5H8.4a.75.75 0 0 0-.75.75v.632c0 .813 0 1.469.043 2c.045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365c.531.043 1.187.043 2 .043h3.064c.813 0 1.469 0 2-.043c.546-.045 1.026-.14 1.47-.366a3.75 3.75 0 0 0 1.64-1.639c.226-.444.32-.924.365-1.47c.043-.531.043-1.187.043-2v-3.064c0-.813 0-1.469-.043-2c-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64c-.444-.226-.924-.32-1.47-.365c-.531-.043-1.187-.043-2-.043zM3.75 13.8a.75.75 0 0 0-1.5 0v1.8c0 .414.336.75.75.75h1.35a.75.75 0 0 0 0-1.5h-.6z"></svg:path><svg:path d="M16.35 13.8a.75.75 0 0 0-1.5 0v1.05H13.8a.75.75 0 0 0 0 1.5h1.8a.75.75 0 0 0 .75-.75z"></svg:path></svg:g>`,
})
export class MynauiSubtractSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSunSolidIcon],svg[mynaui-sun-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75m0 16.004a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75M2.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m16 0a.75.75 0 0 1 .75-.75h2a.75.75 0 1 1 0 1.5h-2a.75.75 0 0 1-.75-.75m1.28-7.53a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-15.06 0a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06m3.06 12a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m8.94 0a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06M12 7.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5"></svg:path>`,
})
export class MynauiSunSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSunriseSolidIcon],svg[mynaui-sunrise-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.995 14.495A4.25 4.25 0 0 1 16.25 17.5a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75a4.25 4.25 0 0 1 1.245-3.005m-3.627-3.627a.75.75 0 0 1 1.06 0l1.278 1.278a.75.75 0 0 1-1.06 1.06l-1.278-1.278a.75.75 0 0 1 0-1.06M2.25 17.4a.75.75 0 0 1 .75-.75h1.8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m16 0a.75.75 0 0 1 .75-.75h1.8a.75.75 0 0 1 0 1.5H19a.75.75 0 0 1-.75-.75m.182-6.532a.75.75 0 0 1 0 1.06l-1.278 1.278a.75.75 0 0 1-1.06-1.06l1.278-1.278a.75.75 0 0 1 1.06 0M2.25 21a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M11.9 2.25a.75.75 0 0 1 .53.22l3.6 3.6a.75.75 0 0 1-1.06 1.06l-2.32-2.32V10a.75.75 0 0 1-1.5 0V4.81L8.83 7.13a.75.75 0 0 1-1.06-1.06l3.6-3.6a.75.75 0 0 1 .53-.22"></svg:path>`,
})
export class MynauiSunriseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSunsetSolidIcon],svg[mynaui-sunset-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.368 10.868a.75.75 0 0 1 1.06 0l1.278 1.278a.75.75 0 0 1-1.06 1.06l-1.278-1.278a.75.75 0 0 1 0-1.06M2.25 17.4a.75.75 0 0 1 .75-.75h1.8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m16 0a.75.75 0 0 1 .75-.75h1.8a.75.75 0 0 1 0 1.5H19a.75.75 0 0 1-.75-.75m.182-6.532a.75.75 0 0 1 0 1.06l-1.278 1.278a.75.75 0 0 1-1.06-1.06l1.278-1.278a.75.75 0 0 1 1.06 0M2.25 21a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m6.745-6.505A4.25 4.25 0 0 1 16.25 17.5a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75a4.25 4.25 0 0 1 1.245-3.005M11.9 2.25a.75.75 0 0 1 .75.75v5.79l2.32-2.32a.75.75 0 0 1 1.06 1.06l-3.6 3.6a.75.75 0 0 1-1.06 0l-3.6-3.6a.75.75 0 0 1 1.06-1.06l2.32 2.32V3a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiSunsetSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSupportSolidIcon],svg[mynaui-support-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.66 6.72A8.22 8.22 0 0 0 3.75 12c0 2.008.717 3.849 1.91 5.28l2.853-2.853a4.31 4.31 0 0 1 0-4.854zm12.68 0l-2.853 2.853a4.31 4.31 0 0 1 0 4.854l2.853 2.852A8.22 8.22 0 0 0 20.25 12a8.22 8.22 0 0 0-1.91-5.28M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m11.695-1.944C12.889 9 11.11 9 10.055 10.056C9 11.11 9 12.889 10.056 13.945s2.834 1.055 3.89 0c1.055-1.056 1.055-2.834 0-3.89"></svg:path>`,
})
export class MynauiSupportSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSwatchesSolidIcon],svg[mynaui-swatches-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.456 5.073c.557-2.042 2.625-3.272 4.647-2.67l1.171.347c2.034.605 3.152 2.804 2.55 4.848l-.49 1.666l1.397-.796c1.964-1.12 4.402-.218 5.264 1.874l.524 1.274c.366.887.386 1.838.123 2.69c.53.403.825.929.971 1.502c.15.587.144 1.248.139 1.795l-.002.274c0 2.11-1.65 3.873-3.75 3.873H6.56a4.2 4.2 0 0 1-1.163-.15c-2.277-.625-3.603-3.008-3.002-5.304l.002-.007zm5.25 15.177H18c1.215 0 2.25-1.034 2.25-2.373l.001-.33c.004-.556.006-.986-.091-1.368a1.2 1.2 0 0 0-.252-.516c-.353.422-.8.774-1.33 1.014zm-.135-1.586l7.386-3.353a2.3 2.3 0 0 0 1.082-1.034a2.48 2.48 0 0 0 .093-2.09l-.524-1.274c-.534-1.296-1.992-1.794-3.134-1.142l-2.75 1.568l-2.12 7.204zm-3.866-2.386a.75.75 0 0 0-.926.517l-.243.854a.75.75 0 0 0 1.443.41l.243-.854a.75.75 0 0 0-.517-.926"></svg:path>`,
})
export class MynauiSwatchesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTableSolidIcon],svg[mynaui-table-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.693 17.288c.057-.697.057-1.563.057-2.655V10.25h-12v11.5h4.883c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869M17.288 2.307c-.697-.057-1.563-.057-2.655-.057H9.75v6.5h12c-.002-.808-.011-1.477-.057-2.038c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461M2.768 4.844c-.281.55-.403 1.154-.461 1.868c-.046.56-.055 1.23-.057 2.038h6V2.253c-.59.005-1.097.018-1.538.054c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077m2.076 16.388c.55.281 1.154.403 1.868.461c.44.036.948.05 1.538.054V10.25h-6v4.383c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075"></svg:path>`,
})
export class MynauiTableSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTabletSolidIcon],svg[mynaui-tablet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 4.8c0-1.565 1.536-2.55 3.036-2.55h11.428c1.5 0 3.036.985 3.036 2.55v14.4c0 1.565-1.536 2.55-3.036 2.55H6.286c-1.5 0-3.036-.985-3.036-2.55zm7.25.45a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiTabletSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTagPlusSolidIcon],svg[mynaui-tag-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.61 5.269a3.65 3.65 0 0 1 1.862-.519H14.77c.717 0 1.406.28 1.92.781l5.35 5.216a1.75 1.75 0 0 1 0 2.506l-5.35 5.216a2.75 2.75 0 0 1-1.92.781H4.472a3.65 3.65 0 0 1-1.862-.519c-.58-.359-1.11-.974-1.11-1.856v-9.75c0-.882.53-1.498 1.11-1.856M9.25 9.5a.75.75 0 0 0-1.5 0v1.75H6a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0v-1.75H11a.75.75 0 0 0 0-1.5H9.25z"></svg:path>`,
})
export class MynauiTagPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTagSolidIcon],svg[mynaui-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.472 4.75c-.597 0-1.293.166-1.862.519c-.58.358-1.11.974-1.11 1.856v9.75c0 .882.53 1.497 1.11 1.856c.57.353 1.265.519 1.862.519H14.77a2.75 2.75 0 0 0 1.92-.781l5.35-5.216a1.75 1.75 0 0 0 0-2.506l-5.35-5.216a2.75 2.75 0 0 0-1.92-.781z"></svg:path>`,
})
export class MynauiTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTallyFiveSolidIcon],svg[mynaui-tally-five-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.53 2.47a.75.75 0 0 1 0 1.06l-.78.78V20a.75.75 0 0 1-1.5 0V5.81l-3.833 3.834V20a.75.75 0 0 1-1.5 0v-8.856l-3.834 3.833V20a.75.75 0 1 1-1.5 0v-3.523L3.53 21.53a.75.75 0 0 1-1.06-1.06l.78-.78V4a.75.75 0 0 1 1.5 0v14.19l3.833-3.834V4a.75.75 0 0 1 1.5 0v8.856l3.834-3.833V4a.75.75 0 0 1 1.5 0v3.523L20.47 2.47a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiTallyFiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTallyFourSolidIcon],svg[mynaui-tally-four-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25m5.333 0a.75.75 0 0 1 .75.75v16a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .75-.75m5.334 0a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m5.333 0a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiTallyFourSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTallyOneSolidIcon],svg[mynaui-tally-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25"></svg:path>`,
})
export class MynauiTallyOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTallyThreeSolidIcon],svg[mynaui-tally-three-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25m5.333 0a.75.75 0 0 1 .75.75v16a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .75-.75m5.334 0a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiTallyThreeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTallyTwoSolidIcon],svg[mynaui-tally-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25m5.333 0a.75.75 0 0 1 .75.75v16a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiTallyTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTargetSolidIcon],svg[mynaui-target-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.75a8.25 8.25 0 1 0 0 16.5a8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 7.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M6 12a6 6 0 1 1 12 0a6 6 0 0 1-12 0m3.75 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path>`,
})
export class MynauiTargetSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTelephoneCallSolidIcon],svg[mynaui-telephone-call-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 3a.75.75 0 0 1 .75-.75A7.75 7.75 0 0 1 21.75 10a.75.75 0 0 1-1.5 0A6.25 6.25 0 0 0 14 3.75a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75A3.75 3.75 0 0 1 17.75 10a.75.75 0 0 1-1.5 0A2.25 2.25 0 0 0 14 7.75a.75.75 0 0 1-.75-.75M9.004 3.416C8.432 2.606 7.64 2.241 6.8 2.25c-.797.008-1.573.349-2.221.803A6.2 6.2 0 0 0 2.92 4.79c-.41.649-.706 1.416-.666 2.165c.193 3.603 2.22 7.453 5.067 10.302c2.845 2.846 6.644 4.824 10.48 4.446c.752-.074 1.463-.457 2.044-.945a5.8 5.8 0 0 0 1.443-1.84c.34-.692.543-1.49.431-2.267c-.116-.81-.569-1.534-1.402-2.014a16 16 0 0 1-.512-.31c-.15-.093-.31-.194-.504-.31a7.5 7.5 0 0 0-1.249-.618c-.447-.163-.958-.27-1.49-.197c-.551.076-1.063.336-1.506.802c-.341.36-.843.472-1.549.268c-.718-.208-1.526-.724-2.228-1.422c-.702-.696-1.233-1.51-1.46-2.245c-.224-.728-.125-1.263.225-1.632c.473-.498.725-1.052.778-1.638c.052-.57-.09-1.106-.293-1.574c-.304-.699-.82-1.394-1.224-1.936a22 22 0 0 1-.3-.41"></svg:path>`,
})
export class MynauiTelephoneCallSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTelephoneForwardSolidIcon],svg[mynaui-telephone-forward-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.47 2.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H15a.75.75 0 0 1 0-1.5h4.69l-1.22-1.22a.75.75 0 0 1 0-1.06m-9.466.946C8.432 2.606 7.64 2.241 6.8 2.25c-.797.008-1.573.349-2.221.803A6.2 6.2 0 0 0 2.92 4.79c-.41.649-.706 1.416-.666 2.165c.193 3.603 2.22 7.453 5.067 10.302c2.845 2.846 6.644 4.824 10.48 4.446c.752-.074 1.463-.457 2.044-.945a5.8 5.8 0 0 0 1.443-1.84c.34-.692.543-1.49.431-2.267c-.116-.81-.569-1.534-1.402-2.014a16 16 0 0 1-.512-.31c-.15-.093-.31-.194-.504-.31a7.5 7.5 0 0 0-1.249-.618c-.447-.163-.958-.27-1.49-.197c-.551.076-1.063.336-1.506.802c-.341.36-.843.472-1.549.268c-.718-.208-1.526-.724-2.228-1.422c-.702-.696-1.233-1.51-1.46-2.245c-.224-.728-.125-1.263.225-1.632c.473-.498.725-1.052.778-1.638c.052-.57-.09-1.106-.293-1.574c-.304-.699-.82-1.394-1.224-1.936a22 22 0 0 1-.3-.41"></svg:path>`,
})
export class MynauiTelephoneForwardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTelephoneInSolidIcon],svg[mynaui-telephone-in-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.03 2.47a.75.75 0 0 1 0 1.06l-3.22 3.22h1.69a.75.75 0 0 1 0 1.5H16a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v1.69l3.22-3.22a.75.75 0 0 1 1.06 0m-12.026.946C8.432 2.606 7.64 2.241 6.8 2.25c-.797.008-1.573.349-2.221.803A6.2 6.2 0 0 0 2.92 4.79c-.41.649-.706 1.416-.666 2.165c.193 3.603 2.22 7.453 5.067 10.302c2.845 2.846 6.644 4.824 10.48 4.446c.752-.074 1.463-.457 2.044-.945a5.8 5.8 0 0 0 1.443-1.84c.34-.692.543-1.49.431-2.267c-.116-.81-.569-1.534-1.402-2.014a16 16 0 0 1-.512-.31c-.15-.093-.31-.194-.504-.31a7.5 7.5 0 0 0-1.249-.618c-.447-.163-.958-.27-1.49-.197c-.551.076-1.063.336-1.506.802c-.341.36-.843.472-1.549.268c-.718-.208-1.526-.724-2.228-1.422c-.702-.696-1.233-1.51-1.46-2.245c-.224-.728-.125-1.263.225-1.632c.473-.498.725-1.052.778-1.638c.052-.57-.09-1.106-.293-1.574c-.304-.699-.82-1.394-1.224-1.936a22 22 0 0 1-.3-.41"></svg:path>`,
})
export class MynauiTelephoneInSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTelephoneMissedSolidIcon],svg[mynaui-telephone-missed-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.47 2.47a.75.75 0 0 1 1.06 0L19 3.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L20.06 5l1.47 1.47a.75.75 0 0 1-1.06 1.06L19 6.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L17.94 5l-1.47-1.47a.75.75 0 0 1 0-1.06m-7.466.946C8.432 2.606 7.64 2.241 6.8 2.25c-.797.008-1.573.349-2.221.803A6.2 6.2 0 0 0 2.92 4.79c-.41.649-.706 1.416-.666 2.165c.193 3.603 2.22 7.453 5.067 10.302c2.845 2.846 6.644 4.824 10.48 4.446c.752-.074 1.463-.457 2.044-.945a5.8 5.8 0 0 0 1.443-1.84c.34-.692.543-1.49.431-2.267c-.116-.81-.569-1.534-1.402-2.014a16 16 0 0 1-.512-.31c-.15-.093-.31-.194-.504-.31a7.5 7.5 0 0 0-1.249-.618c-.447-.163-.958-.27-1.49-.197c-.551.076-1.063.336-1.506.802c-.341.36-.843.472-1.549.268c-.718-.208-1.526-.724-2.228-1.422c-.702-.696-1.233-1.51-1.46-2.245c-.224-.728-.125-1.263.225-1.632c.473-.498.725-1.052.778-1.638c.052-.57-.09-1.106-.293-1.574c-.304-.699-.82-1.394-1.224-1.936a22 22 0 0 1-.3-.41"></svg:path>`,
})
export class MynauiTelephoneMissedSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTelephoneOutSolidIcon],svg[mynaui-telephone-out-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 3a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V4.81l-3.22 3.22a.75.75 0 1 1-1.06-1.06l3.22-3.22H16a.75.75 0 0 1-.75-.75m-6.246.416C8.432 2.606 7.64 2.241 6.8 2.25c-.797.008-1.573.349-2.221.803A6.2 6.2 0 0 0 2.92 4.79c-.41.649-.706 1.416-.666 2.165c.193 3.603 2.22 7.453 5.067 10.302c2.845 2.846 6.644 4.824 10.48 4.446c.752-.074 1.463-.457 2.044-.945a5.8 5.8 0 0 0 1.443-1.84c.34-.692.543-1.49.431-2.267c-.116-.81-.569-1.534-1.402-2.014a16 16 0 0 1-.512-.31c-.15-.093-.31-.194-.504-.31a7.5 7.5 0 0 0-1.249-.618c-.447-.163-.958-.27-1.49-.197c-.551.076-1.063.336-1.506.802c-.341.36-.843.472-1.549.268c-.718-.208-1.526-.724-2.228-1.422c-.702-.696-1.233-1.51-1.46-2.245c-.224-.728-.125-1.263.225-1.632c.473-.498.725-1.052.778-1.638c.052-.57-.09-1.106-.293-1.574c-.304-.699-.82-1.394-1.224-1.936c-.111-.15-.214-.287-.3-.41"></svg:path>`,
})
export class MynauiTelephoneOutSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTelephoneSlashSolidIcon],svg[mynaui-telephone-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.004 3.416C8.432 2.606 7.64 2.241 6.8 2.25c-.797.008-1.573.349-2.221.803A6.2 6.2 0 0 0 2.92 4.79c-.41.649-.706 1.416-.666 2.165c.175 3.257 1.848 6.718 4.273 9.457L2.47 20.47a.75.75 0 1 0 1.06 1.06l4.034-4.033c2.816 2.717 6.51 4.575 10.237 4.207c.752-.074 1.463-.457 2.044-.945a5.8 5.8 0 0 0 1.443-1.84c.34-.692.543-1.49.431-2.267c-.116-.81-.569-1.534-1.402-2.014a16 16 0 0 1-.512-.31c-.15-.093-.31-.194-.504-.31a7.5 7.5 0 0 0-1.249-.618c-.447-.163-.958-.27-1.49-.197c-.551.076-1.063.336-1.506.802c-.341.36-.843.472-1.549.268c-.556-.161-1.166-.508-1.74-.98L21.53 3.53a.75.75 0 0 0-1.06-1.06l-9.754 9.753c-.42-.532-.736-1.094-.897-1.617c-.224-.728-.125-1.263.225-1.632c.473-.498.725-1.052.778-1.638c.052-.57-.09-1.106-.293-1.574c-.304-.699-.82-1.394-1.224-1.936a22 22 0 0 1-.3-.41"></svg:path>`,
})
export class MynauiTelephoneSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTelephoneSolidIcon],svg[mynaui-telephone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.004 3.416C8.432 2.606 7.64 2.241 6.8 2.25c-.797.008-1.573.349-2.221.803A6.2 6.2 0 0 0 2.92 4.79c-.41.649-.706 1.416-.666 2.165c.193 3.603 2.22 7.453 5.067 10.302c2.845 2.846 6.644 4.824 10.48 4.446c.752-.074 1.463-.457 2.044-.945a5.8 5.8 0 0 0 1.443-1.84c.34-.692.543-1.49.431-2.267c-.116-.81-.569-1.534-1.402-2.014a16 16 0 0 1-.512-.31c-.15-.093-.31-.194-.504-.31a7.5 7.5 0 0 0-1.249-.618c-.447-.163-.958-.27-1.49-.197c-.551.076-1.063.336-1.506.802c-.341.36-.843.472-1.549.268c-.718-.208-1.526-.724-2.228-1.422c-.702-.696-1.233-1.51-1.46-2.245c-.224-.728-.125-1.263.225-1.632c.473-.498.725-1.052.778-1.638c.052-.57-.09-1.106-.293-1.574c-.304-.699-.82-1.394-1.224-1.936a22 22 0 0 1-.3-.41"></svg:path>`,
})
export class MynauiTelephoneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTerminalSolidIcon],svg[mynaui-terminal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M8.53 8.47a.75.75 0 0 0-1.06 1.06L9.94 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06zM13 14.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiTerminalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTextAlignCenterSolidIcon],svg[mynaui-text-align-center-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 3.75 6m2.5 4A.75.75 0 0 1 7 9.25h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m-2.5 4a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75m2.5 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiTextAlignCenterSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTextAlignLeftSolidIcon],svg[mynaui-text-align-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 3.75 6m0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiTextAlignLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTextAlignRightSolidIcon],svg[mynaui-text-align-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 3.75 6m5 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75m-5 4a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75m5 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiTextAlignRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTextJustifySolidIcon],svg[mynaui-text-justify-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 3.75 6m0 4a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiTextJustifySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiThermometerSolidIcon],svg[mynaui-thermometer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-.72 0-1.417.276-1.935.775A2.65 2.65 0 0 0 9.25 4.93v8.426a4.7 4.7 0 0 0-1.463 1.646a4.55 4.55 0 0 0-.532 2.352a4.55 4.55 0 0 0 1.513 3.166a4.83 4.83 0 0 0 3.339 1.23a4.82 4.82 0 0 0 3.279-1.375a4.54 4.54 0 0 0 1.364-3.23a4.56 4.56 0 0 0-.587-2.235a4.7 4.7 0 0 0-1.413-1.554V4.93c0-.72-.297-1.404-.815-1.904A2.8 2.8 0 0 0 12 2.25"></svg:path>`,
})
export class MynauiThermometerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiThreeCircleSolidIcon],svg[mynaui-three-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13-2.006c0-.935-.453-1.65-1.097-2.107c-.622-.441-1.408-.637-2.153-.637s-1.531.196-2.153.637c-.643.456-1.097 1.172-1.097 2.107a.75.75 0 1 0 1.5 0c0-.394.172-.675.465-.884c.316-.224.78-.36 1.285-.36s.969.136 1.285.36c.292.207.463.486.465.877l-.002.027c-.003.03-.008.08-.021.141a1.4 1.4 0 0 1-.176.445c-.166.267-.542.65-1.551.65a.75.75 0 0 0 0 1.5c1.01 0 1.385.383 1.551.65a1.4 1.4 0 0 1 .199.613c-.002.39-.173.67-.465.877c-.316.224-.78.36-1.285.36s-.969-.136-1.285-.36c-.293-.209-.465-.49-.465-.884a.75.75 0 1 0-1.5 0c0 .935.454 1.65 1.097 2.107c.622.441 1.408.637 2.153.637s1.531-.196 2.153-.637c.643-.456 1.097-1.172 1.097-2.107v-.002a2.9 2.9 0 0 0-.426-1.398a2.7 2.7 0 0 0-.517-.606c.211-.184.382-.39.517-.606a2.9 2.9 0 0 0 .426-1.398z"></svg:path>`,
})
export class MynauiThreeCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiThreeDiamondSolidIcon],svg[mynaui-three-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m4.46 8.504c0-.935-.453-1.65-1.097-2.107c-.622-.441-1.408-.637-2.153-.637s-1.531.196-2.153.637C9.204 8.344 8.75 9.06 8.75 9.995a.75.75 0 1 0 1.5 0c0-.394.172-.675.465-.884c.316-.224.78-.36 1.285-.36s.969.136 1.285.36c.292.207.463.486.465.877l-.002.027c-.003.03-.008.08-.021.141a1.4 1.4 0 0 1-.176.445c-.166.267-.542.65-1.551.65a.75.75 0 0 0 0 1.5c1.01 0 1.385.383 1.551.65a1.4 1.4 0 0 1 .199.613c-.002.39-.173.67-.465.877c-.316.224-.78.36-1.285.36s-.969-.136-1.285-.36c-.293-.209-.465-.49-.465-.884a.75.75 0 1 0-1.5 0c0 .935.454 1.65 1.097 2.107c.622.441 1.408.637 2.153.637s1.531-.196 2.153-.637c.643-.456 1.097-1.172 1.097-2.107v-.002a2.9 2.9 0 0 0-.426-1.398a2.7 2.7 0 0 0-.517-.606c.211-.184.382-.39.517-.606a2.9 2.9 0 0 0 .426-1.398z"></svg:path>`,
})
export class MynauiThreeDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiThreeHexagonSolidIcon],svg[mynaui-three-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm4.57 7.89c0-.936-.453-1.652-1.097-2.108c-.622-.441-1.408-.637-2.153-.637s-1.531.196-2.153.637c-.643.456-1.097 1.172-1.097 2.107a.75.75 0 1 0 1.5 0c0-.394.172-.675.465-.884c.316-.224.78-.36 1.285-.36s.969.136 1.285.36c.292.207.463.486.465.877l-.002.027c-.003.03-.008.08-.021.141a1.4 1.4 0 0 1-.176.445c-.166.267-.542.65-1.551.65a.75.75 0 0 0 0 1.5c1.01 0 1.385.383 1.551.65a1.4 1.4 0 0 1 .199.613c-.002.39-.173.67-.465.877c-.316.224-.78.36-1.285.36s-.969-.136-1.285-.36c-.293-.209-.465-.49-.465-.884a.75.75 0 1 0-1.5 0c0 .935.454 1.65 1.097 2.107c.622.441 1.408.637 2.153.637s1.531-.196 2.153-.637c.643-.456 1.097-1.172 1.097-2.107v-.002a2.9 2.9 0 0 0-.426-1.398a2.7 2.7 0 0 0-.517-.606c.211-.184.382-.39.517-.606a2.9 2.9 0 0 0 .426-1.398z"></svg:path>`,
})
export class MynauiThreeHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiThreeOctagonSolidIcon],svg[mynaui-three-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m7.213 7.586c0-.935-.453-1.65-1.097-2.107c-.622-.441-1.408-.637-2.153-.637s-1.531.196-2.153.637c-.643.456-1.097 1.172-1.097 2.107a.75.75 0 1 0 1.5 0c0-.394.172-.675.465-.884c.316-.224.78-.36 1.285-.36s.969.136 1.285.36c.292.207.463.486.465.877l-.002.027c-.003.03-.008.08-.021.141a1.4 1.4 0 0 1-.176.445c-.166.267-.542.65-1.551.65a.75.75 0 0 0 0 1.5c1.01 0 1.385.383 1.551.65a1.4 1.4 0 0 1 .199.613c-.002.39-.173.67-.465.877c-.316.224-.78.36-1.285.36s-.969-.136-1.285-.36c-.293-.209-.465-.49-.465-.884a.75.75 0 1 0-1.5 0c0 .935.454 1.65 1.097 2.107c.622.441 1.408.637 2.153.637s1.531-.196 2.153-.637c.643-.456 1.097-1.172 1.097-2.107v-.002a2.9 2.9 0 0 0-.426-1.398a2.7 2.7 0 0 0-.517-.606c.211-.184.382-.39.517-.606a2.9 2.9 0 0 0 .426-1.398z"></svg:path>`,
})
export class MynauiThreeOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiThreeSolidIcon],svg[mynaui-three-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.457 7.011c.761.54 1.293 1.38 1.293 2.482v.022a2 2 0 0 1-.01.152a3.4 3.4 0 0 1-.495 1.476c-.193.31-.45.606-.785.857c.335.25.592.546.786.857a3.4 3.4 0 0 1 .504 1.628v.021c0 1.101-.532 1.943-1.293 2.483c-.739.523-1.68.761-2.582.761s-1.844-.238-2.582-.761C8.532 16.449 8 15.609 8 14.507a.75.75 0 0 1 1.5 0c0 .56.25.967.66 1.258c.434.307 1.054.485 1.715.485s1.281-.178 1.715-.485c.409-.29.658-.694.66-1.252v-.003l-.003-.044a1.9 1.9 0 0 0-.274-.816c-.245-.392-.776-.9-2.098-.9a.75.75 0 0 1 0-1.5c1.322 0 1.854-.508 2.098-.9a1.9 1.9 0 0 0 .277-.86v-.003c-.002-.558-.251-.962-.66-1.252c-.434-.307-1.054-.485-1.715-.485s-1.281.178-1.715.485c-.41.291-.66.697-.66 1.258a.75.75 0 1 1-1.5 0c0-1.101.532-1.942 1.293-2.482c.739-.523 1.68-.761 2.582-.761s1.844.238 2.582.761"></svg:path>`,
})
export class MynauiThreeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiThreeSquareSolidIcon],svg[mynaui-three-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m5.883 7.744c0-.935-.453-1.65-1.097-2.107c-.622-.441-1.408-.637-2.153-.637s-1.531.196-2.153.637c-.643.456-1.097 1.172-1.097 2.107a.75.75 0 1 0 1.5 0c0-.394.172-.675.465-.884c.316-.224.78-.36 1.285-.36s.969.136 1.285.36c.292.207.463.486.465.877l-.002.027c-.003.03-.008.08-.021.141a1.4 1.4 0 0 1-.176.445c-.166.267-.542.65-1.551.65a.75.75 0 0 0 0 1.5c1.01 0 1.385.383 1.551.65a1.4 1.4 0 0 1 .199.613c-.002.39-.173.67-.465.877c-.316.224-.78.36-1.285.36s-.969-.136-1.285-.36c-.293-.209-.465-.49-.465-.884a.75.75 0 1 0-1.5 0c0 .935.454 1.65 1.097 2.107c.622.441 1.408.637 2.153.637s1.531-.196 2.153-.637c.643-.456 1.097-1.172 1.097-2.107v-.002a2.9 2.9 0 0 0-.426-1.398a2.7 2.7 0 0 0-.517-.606c.211-.184.382-.39.517-.606a2.9 2.9 0 0 0 .426-1.398z"></svg:path>`,
})
export class MynauiThreeSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiThreeWavesSolidIcon],svg[mynaui-three-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m4.685 7.92c0-.936-.453-1.652-1.097-2.108c-.622-.441-1.408-.637-2.153-.637s-1.531.196-2.153.637c-.643.456-1.097 1.172-1.097 2.107a.75.75 0 1 0 1.5 0c0-.394.172-.675.465-.884c.316-.224.78-.36 1.285-.36s.969.136 1.285.36c.292.207.463.486.465.877l-.002.027c-.003.03-.008.08-.021.141a1.4 1.4 0 0 1-.176.445c-.166.267-.542.65-1.551.65a.75.75 0 0 0 0 1.5c1.01 0 1.385.383 1.551.65a1.4 1.4 0 0 1 .199.613c-.002.39-.173.67-.465.877c-.316.224-.78.36-1.285.36s-.969-.136-1.285-.36c-.293-.209-.465-.49-.465-.884a.75.75 0 1 0-1.5 0c0 .935.454 1.65 1.097 2.107c.622.441 1.408.637 2.153.637s1.531-.196 2.153-.637c.643-.456 1.097-1.172 1.097-2.107v-.002a2.9 2.9 0 0 0-.426-1.398a2.7 2.7 0 0 0-.517-.606c.211-.184.382-.39.517-.606a2.9 2.9 0 0 0 .426-1.398z"></svg:path>`,
})
export class MynauiThreeWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTicketSlashSolidIcon],svg[mynaui-ticket-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.25A2.75 2.75 0 0 0 2.25 7v3c0 .414.336.75.75.75a1.25 1.25 0 1 1 0 2.5a.75.75 0 0 0-.75.75v3c0 1 .534 1.876 1.332 2.357L2.47 20.47a.75.75 0 1 0 1.06 1.06l1.78-1.78H19A2.75 2.75 0 0 0 21.75 17v-3a.75.75 0 0 0-.75-.75a1.25 1.25 0 1 1 0-2.5a.75.75 0 0 0 .75-.75V7c0-1-.534-1.876-1.332-2.357L21.53 3.53a.75.75 0 0 0-1.06-1.06l-1.78 1.78zm7 3a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m0 7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiTicketSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTicketSolidIcon],svg[mynaui-ticket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v3a.75.75 0 0 1-.75.75a1.25 1.25 0 1 0 0 2.5a.75.75 0 0 1 .75.75v3A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17v-3a.75.75 0 0 1 .75-.75a1.25 1.25 0 1 0 0-2.5a.75.75 0 0 1-.75-.75zm10.5 1a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm0 3.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm0 3.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiTicketSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiToggleLeftSolidIcon],svg[mynaui-toggle-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12A5.75 5.75 0 0 1 8 6.25h8a5.75 5.75 0 0 1 0 11.5H8A5.75 5.75 0 0 1 2.25 12m2.5 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 0 0-6.5 0"></svg:path>`,
})
export class MynauiToggleLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiToggleRightSolidIcon],svg[mynaui-toggle-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.25a5.75 5.75 0 1 0 0 11.5h8a5.75 5.75 0 0 0 0-11.5zM12.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path>`,
})
export class MynauiToggleRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiToolSolidIcon],svg[mynaui-tool-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.14 2.25a5.61 5.61 0 0 0-5.327 7.376L2.77 17.671a1.774 1.774 0 0 0 0 2.508l1.052 1.052a1.773 1.773 0 0 0 2.509 0l8.044-8.045a5.61 5.61 0 0 0 7.19-6.765c-.266-1.004-1.442-1.104-2.032-.514L17.81 7.629a1.017 1.017 0 1 1-1.438-1.438l1.722-1.723c.59-.59.49-1.766-.515-2.032a5.6 5.6 0 0 0-1.438-.186"></svg:path>`,
})
export class MynauiToolSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTrainSolidIcon],svg[mynaui-train-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 6A3.75 3.75 0 0 1 8 2.25h8A3.75 3.75 0 0 1 19.75 6v9c0 1.63-1.04 3.017-2.493 3.534l1.367 2.05a.75.75 0 1 1-1.248.832l-1.777-2.666H8.4l-1.777 2.666a.75.75 0 1 1-1.248-.832l1.367-2.05A3.75 3.75 0 0 1 4.25 15zm14 .75h-5.5v3.5h5.5zm-12.5 3.5h5.5v-3.5h-5.5zm3 3.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MynauiTrainSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTrashOneSolidIcon],svg[mynaui-trash-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.238 3.974L9.98 5.75h4.037l-.256-1.776c-.048-.167-.17-.224-.243-.224H10.48c-.073 0-.195.057-.243.224m5.296 1.776H19.5a.75.75 0 0 1 0 1.5h-.769l-.873 10.185c-.053.62-.096 1.13-.165 1.542c-.07.429-.177.813-.386 1.169a3.25 3.25 0 0 1-1.401 1.287c-.372.177-.764.25-1.198.284c-.417.033-.928.033-1.55.033h-2.316c-.623 0-1.133 0-1.55-.033c-.434-.034-.826-.107-1.198-.284a3.25 3.25 0 0 1-1.401-1.287c-.21-.356-.315-.74-.386-1.169c-.069-.413-.112-.922-.165-1.542L5.269 7.25H4.5a.75.75 0 0 1 0-1.5h3.966l.293-2.029l.011-.061c.182-.79.86-1.41 1.71-1.41h3.04c.85 0 1.528.62 1.71 1.41l.011.061z"></svg:path>`,
})
export class MynauiTrashOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTrashSolidIcon],svg[mynaui-trash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.241 3.721l.293 2.029H19.5a.75.75 0 0 1 0 1.5h-.769l-.873 10.185c-.053.62-.096 1.13-.165 1.542c-.07.429-.177.813-.386 1.169a3.25 3.25 0 0 1-1.401 1.287c-.372.177-.764.25-1.198.284c-.417.033-.928.033-1.55.033h-2.316c-.622 0-1.133 0-1.55-.033c-.434-.034-.826-.107-1.198-.284a3.25 3.25 0 0 1-1.401-1.287c-.21-.356-.315-.74-.386-1.169c-.069-.413-.112-.922-.165-1.542L5.269 7.25H4.5a.75.75 0 0 1 0-1.5h3.966l.293-2.029l.011-.061c.182-.79.86-1.41 1.71-1.41h3.04c.85 0 1.528.62 1.71 1.41zM9.981 5.75h4.037l-.256-1.776c-.048-.167-.17-.224-.243-.224h-3.038c-.073 0-.195.057-.243.224zm1.269 4.75a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiTrashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTrashTwoSolidIcon],svg[mynaui-trash-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.108 5.75l.064.042c.252.154.666.32 1.243.47c1.144.296 2.766.488 4.585.488c1.82 0 3.44-.192 4.585-.489c.578-.15.991-.315 1.243-.47q.037-.021.064-.041l-.064-.042c-.252-.154-.665-.32-1.243-.47C15.44 4.943 13.819 4.75 12 4.75c-1.82 0-3.44.192-4.585.489c-.577.15-.991.315-1.243.47zm-1.602.12a1 1 0 0 1-.006-.12c0-.657.5-1.082.889-1.32c.431-.265 1.006-.477 1.65-.643C8.338 3.45 10.092 3.25 12 3.25s3.662.2 4.961.537c.644.166 1.219.378 1.65.642c.39.239.89.664.89 1.321l-.001.012a1.2 1.2 0 0 1-.021.218l-1.715 12.091a4 4 0 0 1-.852 1.924a3.75 3.75 0 0 1-1.704 1.187l-.246.082a9.27 9.27 0 0 1-5.924 0l-.246-.082a3.74 3.74 0 0 1-1.704-1.187a4 4 0 0 1-.852-1.925l-.001-.009L4.52 5.981a1 1 0 0 1-.015-.112"></svg:path>`,
})
export class MynauiTrashTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTreeSolidIcon],svg[mynaui-tree-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.605 2.556a.75.75 0 0 0-1.21 0l-5.5 7.5A.75.75 0 0 0 6.5 11.25h1.569l-3.686 5.323A.75.75 0 0 0 5 17.75h6.25V21a.75.75 0 0 0 1.5 0v-3.25H19a.75.75 0 0 0 .617-1.177L15.93 11.25h1.57a.75.75 0 0 0 .605-1.194z"></svg:path>`,
})
export class MynauiTreeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTrendingDownSolidIcon],svg[mynaui-trending-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.571 6.514a.75.75 0 0 0-1.142.972l4.458 5.24c.142.168.275.323.396.447c.133.134.29.268.495.366c.297.142.628.197.955.16c.225-.026.417-.103.587-.186c.155-.077.33-.181.52-.293l2.845-1.686c.202-.12.32-.189.41-.234a1 1 0 0 1 .09-.038a.25.25 0 0 1 .126.016a1 1 0 0 1 .076.06c.077.067.173.164.337.331l3.4 3.458L14.25 18c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75l-2.816 2.816l-3.39-3.448l-.063-.065c-.247-.252-.509-.52-.84-.659a1.75 1.75 0 0 0-.912-.118c-.356.049-.678.24-.98.421l-.079.046l-2.825 1.674a8 8 0 0 1-.44.251a1 1 0 0 1-.096.04a.25.25 0 0 1-.132-.021a1 1 0 0 1-.077-.07a8 8 0 0 1-.336-.38z"></svg:path>`,
})
export class MynauiTrendingDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTrendingUpSolidIcon],svg[mynaui-trending-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.571 18.486a.75.75 0 1 1-1.142-.972l4.458-5.24c.142-.168.275-.323.396-.447a1.8 1.8 0 0 1 .495-.366a1.75 1.75 0 0 1 .955-.16c.225.026.417.102.587.186c.155.077.33.181.52.293l2.845 1.686c.202.12.32.189.41.234a.5.5 0 0 0 .09.038a.25.25 0 0 0 .126-.016a1 1 0 0 0 .076-.06c.077-.067.173-.164.337-.331l3.4-3.458L14.25 7a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75l-2.816-2.816l-3.39 3.448l-.063.065c-.247.252-.509.52-.84.659a1.75 1.75 0 0 1-.912.118c-.356-.049-.678-.24-.98-.421l-.079-.046l-2.825-1.674a8 8 0 0 0-.44-.251a1 1 0 0 0-.096-.04a.25.25 0 0 0-.132.021a1 1 0 0 0-.077.07c-.078.078-.173.19-.336.38z"></svg:path>`,
})
export class MynauiTrendingUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTriangleSolidIcon],svg[mynaui-triangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-1.418 0-2.462.91-3.417 2.257c-.948 1.338-1.953 3.318-3.24 5.853l-.39.768c-1.065 2.098-1.904 3.75-2.344 5.076c-.448 1.348-.55 2.552.121 3.623c.67 1.066 1.801 1.511 3.22 1.719c1.398.204 3.272.204 5.656.204h.788c2.384 0 4.258 0 5.656-.204c1.419-.208 2.55-.653 3.22-1.72c.671-1.07.569-2.274.12-3.622c-.44-1.325-1.278-2.978-2.343-5.076l-.39-.768c-1.287-2.535-2.292-4.515-3.24-5.853C14.462 3.159 13.418 2.25 12 2.25"></svg:path>`,
})
export class MynauiTriangleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTruckSolidIcon],svg[mynaui-truck-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.748 17.205H9.872c-.331 1.448-1.602 2.545-3.148 2.545c-1.545 0-2.816-1.097-3.148-2.546H3a.75.75 0 0 1-.75-.75V6c0-.966.784-1.75 1.75-1.75h9.793c.967 0 1.75.784 1.75 1.75v1.432h1.51c.742 0 1.452.299 1.97.83l2.514 2.578a.75.75 0 0 1 .213.524v5.09a.75.75 0 0 1-.705.75c-.331 1.448-1.603 2.546-3.148 2.546s-2.817-1.097-3.149-2.546m-8.024-2.546c-.94 0-1.733.786-1.733 1.795c0 1.01.794 1.796 1.733 1.796s1.733-.786 1.733-1.796c0-1.009-.793-1.795-1.733-1.795m11.173 0c-.94 0-1.733.786-1.733 1.795c0 1.01.793 1.796 1.733 1.796c.939 0 1.732-.786 1.732-1.796c0-1.009-.793-1.795-1.732-1.795"></svg:path>`,
})
export class MynauiTruckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTvSolidIcon],svg[mynaui-tv-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.274 2.613a.75.75 0 0 1-.255 1.03L14.696 6.25H19c1.57 0 2.75 1.353 2.75 2.904v9.692c0 1.55-1.18 2.904-2.75 2.904H5c-1.57 0-2.75-1.353-2.75-2.904V9.154C2.25 7.604 3.43 6.25 5 6.25h3.995L4.96 3.629a.75.75 0 1 1 .817-1.258l5.972 3.879h.042l6.453-3.892a.75.75 0 0 1 1.03.255"></svg:path>`,
})
export class MynauiTvSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTwoCircleSolidIcon],svg[mynaui-two-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8-1.663c0-.579.207-.956.473-1.195c.279-.251.67-.392 1.085-.392s.806.14 1.085.392c.265.239.472.616.472 1.195c0 .862-.564 1.771-1.49 2.704c-.692.698-1.484 1.313-2.195 1.864q-.34.264-.65.51a.75.75 0 0 0 .47 1.335h5a.75.75 0 1 0 0-1.5h-2.84c.433-.357.876-.745 1.28-1.153c.982-.99 1.925-2.271 1.925-3.76c0-.98-.37-1.77-.969-2.31c-.587-.528-1.349-.777-2.088-.777s-1.502.249-2.089.777c-.6.54-.969 1.33-.969 2.31a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class MynauiTwoCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTwoDiamondSolidIcon],svg[mynaui-two-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m-.54 8.847c0-.579.207-.956.473-1.195c.279-.251.67-.392 1.085-.392s.806.14 1.085.392c.265.239.472.616.472 1.195c0 .862-.564 1.771-1.49 2.704c-.692.698-1.484 1.313-2.195 1.864q-.34.264-.65.51a.75.75 0 0 0 .47 1.335h5a.75.75 0 1 0 0-1.5h-2.84c.433-.357.876-.745 1.28-1.153c.982-.99 1.925-2.271 1.925-3.76c0-.98-.37-1.77-.969-2.31c-.587-.528-1.349-.777-2.088-.777s-1.502.249-2.089.777c-.6.54-.969 1.33-.969 2.31a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class MynauiTwoDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTwoHexagonSolidIcon],svg[mynaui-two-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm-.43 8.232c0-.579.207-.956.473-1.195c.279-.251.67-.392 1.085-.392s.806.14 1.085.392c.265.239.472.616.472 1.195c0 .862-.564 1.771-1.49 2.704c-.692.698-1.484 1.313-2.195 1.864q-.34.264-.65.51a.75.75 0 0 0 .47 1.335h5a.75.75 0 1 0 0-1.5h-2.84c.433-.357.876-.745 1.28-1.153c.982-.99 1.925-2.271 1.925-3.76c0-.98-.37-1.77-.969-2.31c-.587-.528-1.349-.777-2.088-.777s-1.502.249-2.089.777c-.6.54-.969 1.33-.969 2.31a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class MynauiTwoHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTwoOctagonSolidIcon],svg[mynaui-two-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m2.213 7.929c0-.579.207-.956.473-1.195c.279-.251.67-.392 1.085-.392s.806.14 1.085.392c.265.239.472.616.472 1.195c0 .862-.564 1.771-1.49 2.704c-.692.698-1.484 1.313-2.195 1.864q-.34.264-.65.51a.75.75 0 0 0 .47 1.335h5a.75.75 0 1 0 0-1.5h-2.84c.433-.357.876-.745 1.28-1.153c.982-.99 1.925-2.271 1.925-3.76c0-.98-.37-1.77-.969-2.31c-.587-.528-1.349-.777-2.088-.777s-1.502.249-2.089.777c-.6.54-.969 1.33-.969 2.31a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class MynauiTwoOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTwoSolidIcon],svg[mynaui-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.153 8.288c-.374.336-.653.86-.653 1.633a.75.75 0 0 1-1.5 0c0-1.174.442-2.111 1.15-2.748c.694-.626 1.601-.923 2.485-.923s1.79.297 2.485.923c.707.637 1.15 1.574 1.15 2.748c0 1.783-1.132 3.338-2.353 4.569a22 22 0 0 1-1.684 1.508c1.215-.059 2.703-.037 3.949.274a.75.75 0 0 1-.364 1.456c-1.134-.284-2.602-.29-3.834-.214a25 25 0 0 0-2.074.22l-.029.004l-.007.002a.75.75 0 0 1-.593-1.325c.25-.201.521-.411.803-.63c.89-.69 1.893-1.47 2.768-2.352c1.164-1.173 1.917-2.356 1.917-3.512c0-.774-.279-1.297-.653-1.633c-.387-.349-.922-.538-1.481-.538c-.56 0-1.095.19-1.482.538"></svg:path>`,
})
export class MynauiTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTwoSquareSolidIcon],svg[mynaui-two-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.883 8.087c0-.579.207-.956.473-1.195c.279-.251.67-.392 1.085-.392s.806.14 1.085.392c.265.239.472.616.472 1.195c0 .862-.564 1.771-1.49 2.704c-.692.698-1.484 1.313-2.195 1.864q-.34.264-.65.51a.75.75 0 0 0 .47 1.335h5a.75.75 0 1 0 0-1.5h-2.84c.433-.357.876-.745 1.28-1.153c.982-.99 1.925-2.271 1.925-3.76c0-.98-.37-1.77-.969-2.31c-.587-.528-1.349-.777-2.088-.777s-1.502.249-2.089.777c-.6.54-.969 1.33-.969 2.31a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class MynauiTwoSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTwoWavesSolidIcon],svg[mynaui-two-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m-.315 8.262c0-.579.207-.956.473-1.195c.279-.251.67-.392 1.085-.392s.806.14 1.085.392c.265.239.472.616.472 1.195c0 .862-.564 1.771-1.49 2.704c-.692.698-1.484 1.313-2.195 1.864q-.34.264-.65.51a.75.75 0 0 0 .47 1.335h5a.75.75 0 1 0 0-1.5h-2.84c.433-.357.876-.745 1.28-1.153c.982-.99 1.925-2.271 1.925-3.76c0-.98-.37-1.77-.969-2.31c-.587-.528-1.349-.777-2.088-.777s-1.502.249-2.089.777c-.6.54-.969 1.33-.969 2.31a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class MynauiTwoWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTypeBoldSolidIcon],svg[mynaui-type-bold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 3A.75.75 0 0 1 5 2.25h8c1.29 0 2.507.577 3.389 1.57c.88.99 1.361 2.314 1.361 3.68s-.482 2.69-1.361 3.68q-.093.105-.19.202a5.2 5.2 0 0 1 2.527 1.408a5.27 5.27 0 0 1 1.524 3.71a5.27 5.27 0 0 1-1.524 3.71a5.2 5.2 0 0 1-3.687 1.54H5a.75.75 0 0 1-.75-.75zm1.5.75v7.5H13c.832 0 1.65-.37 2.268-1.066c.62-.699.982-1.663.982-2.684s-.361-1.985-.982-2.684C14.65 4.121 13.83 3.75 13 3.75zm0 9v7.5h9.289c.982 0 1.925-.393 2.622-1.096A3.77 3.77 0 0 0 18.75 16.5a3.77 3.77 0 0 0-1.09-2.654a3.7 3.7 0 0 0-2.621-1.096z"></svg:path>`,
})
export class MynauiTypeBoldSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTypeItalicSolidIcon],svg[mynaui-type-italic-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.483 2.25H9a.75.75 0 0 0 0 1.5h4.54l-4.126 16.5H5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-4.04l4.126-16.5H19a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiTypeItalicSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTypeTextSolidIcon],svg[mynaui-type-text-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.578 12.574c.688-.436 1.992-.883 3.068-.83c.527.027.913.168 1.161.396c.231.21.443.587.443 1.311v.42q-.327.064-.762.139l-.28.049c-.673.118-1.46.267-2.207.504c-.74.234-1.504.575-2.092 1.114a3.03 3.03 0 0 0-1.012 2.308c0 .98.404 1.744 1.125 2.189c.674.416 1.516.488 2.307.38c.973-.132 2.033-.559 2.921-1.214V20a.75.75 0 1 0 1.5 0v-6.548c0-1.039-.318-1.86-.93-2.42c-.596-.544-1.368-.749-2.099-.785c-1.438-.072-3.046.489-3.946 1.06a.75.75 0 1 0 .803 1.267m4.672 2.824v1.854c-.694.957-1.984 1.661-3.123 1.816c-.598.081-1.047-.004-1.317-.17c-.222-.138-.413-.383-.413-.913c0-.527.196-.9.527-1.203c.355-.326.881-.584 1.53-.79c.644-.203 1.345-.338 2.013-.456l.266-.046q.262-.044.517-.092M8.483 3.786a.75.75 0 0 0-1.437 0l-4.765 16a.75.75 0 0 0 1.438.428l1.338-4.494h5.415l1.339 4.494a.75.75 0 1 0 1.437-.428zm-.718 2.842l2.26 7.592h-4.52z"></svg:path>`,
})
export class MynauiTypeTextSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiTypeUnderlineSolidIcon],svg[mynaui-type-underline-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2.25a.75.75 0 0 1 .75.75v7.539c0 1.531.566 2.99 1.557 4.058c.99 1.066 2.32 1.653 3.693 1.653s2.704-.587 3.693-1.653c.991-1.067 1.557-2.527 1.557-4.058V3a.75.75 0 0 1 1.5 0v7.539c0 1.895-.699 3.723-1.958 5.079c-1.26 1.358-2.983 2.132-4.792 2.132s-3.531-.774-4.792-2.132c-1.26-1.356-1.958-3.184-1.958-5.08V3A.75.75 0 0 1 6 2.25M3.25 21a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiTypeUnderlineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUmbrellaSolidIcon],svg[mynaui-umbrella-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.25 13C1.25 7.063 6.063 2.25 12 2.25S22.75 7.063 22.75 13a.75.75 0 0 1-1.238.57c-1.22-1.046-2.01-1.418-2.694-1.418c-.683 0-1.474.372-2.693 1.417a.75.75 0 0 1-1.019-.039c-.838-.838-1.622-1.312-2.356-1.5v6.743c0 1.094-.436 1.964-1.123 2.55c-.67.572-1.538.839-2.377.839c-.84 0-1.707-.267-2.377-.84c-.687-.585-1.123-1.455-1.123-2.55a.75.75 0 0 1 1.5 0c0 .666.251 1.116.596 1.41c.36.307.868.48 1.404.48s1.043-.173 1.404-.48c.345-.294.596-.744.596-1.41V12.03c-.734.19-1.518.663-2.356 1.501a.75.75 0 0 1-1.018.04c-1.22-1.046-2.01-1.418-2.694-1.418s-1.474.372-2.694 1.417A.75.75 0 0 1 1.25 13"></svg:path>`,
})
export class MynauiUmbrellaSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUndoSolidIcon],svg[mynaui-undo-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75a9.72 9.72 0 0 1-6.894-2.856a.75.75 0 0 1 1.06-1.06A8.25 8.25 0 1 0 12 3.75c-2.556 0-4.422 1.168-6.167 2.833L7.75 8.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-4A.75.75 0 0 1 3 3.75l1.77 1.77C6.67 3.705 8.905 2.25 12 2.25"></svg:path>`,
})
export class MynauiUndoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUnionSolidIcon],svg[mynaui-union-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.768 2.25c-.813 0-1.469 0-2 .043c-.546.045-1.026.14-1.47.366a3.75 3.75 0 0 0-1.64 1.639c-.226.444-.32.924-.365 1.47c-.043.531-.043 1.187-.043 2v2.164c0 .813 0 1.469.043 2c.045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365c.531.043 1.187.043 2 .043h.782v.782c0 .813 0 1.469.043 2c.045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365c.531.043 1.187.043 2 .043h2.164c.813 0 1.469 0 2-.043c.546-.045 1.026-.14 1.47-.366a3.75 3.75 0 0 0 1.64-1.639c.226-.444.32-.924.365-1.47c.043-.531.043-1.187.043-2v-2.164c0-.813 0-1.469-.043-2c-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64c-.444-.226-.924-.32-1.47-.365c-.531-.043-1.187-.043-2-.043h-.782v-.782c0-.813 0-1.469-.043-2c-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64c-.444-.226-.924-.32-1.47-.365c-.531-.043-1.187-.043-2-.043z"></svg:path>`,
})
export class MynauiUnionSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUnlinkSolidIcon],svg[mynaui-unlink-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 9A.75.75 0 0 1 3 8.25h1.5a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9M9 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 9 2.25M18.75 15a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75M15 18.75a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75m5.528-15.278c-1.691-1.691-4.448-1.601-6.156.107L10.47 7.481a.75.75 0 0 0 1.06 1.061l3.928 3.928a.75.75 0 0 0 1.06 1.06l3.903-3.902c1.708-1.708 1.798-4.465.107-6.156M8.556 11.53a.75.75 0 0 0-1.06-1.061L3.603 14.35c-1.703 1.698-1.863 4.296-.12 6.118c1.783 1.863 4.477 1.578 6.154-.094l3.892-3.881a.75.75 0 1 0-1.06-1.062l-.001.001z"></svg:path>`,
})
export class MynauiUnlinkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUploadSolidIcon],svg[mynaui-upload-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.47 3.97a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06h-3.28v6.97a.75.75 0 0 1-1.5 0V8.53H7.97a.75.75 0 0 1 0-1.06zM20 15.25a.75.75 0 0 1 .75.75v1A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17v-.996a.75.75 0 1 1 1.5 0V17A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17v-1a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiUploadSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUserCheckSolidIcon],svg[mynaui-user-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 7.5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m11.999 12.962c-.262-5.148-4.307-7.712-8.249-7.712s-7.987 2.563-8.249 7.712a.75.75 0 0 0 .71.787c3.365.171 12.998.106 15.077 0a.75.75 0 0 0 .711-.787m-6.068-5.32a.75.75 0 0 1 .169 1.047l-2.1 2.907a.974.974 0 0 1-1.522.072l-1.034-1.182a.75.75 0 0 1 1.129-.988l.598.684l1.713-2.371a.75.75 0 0 1 1.047-.169"></svg:path>`,
})
export class MynauiUserCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUserCircleSolidIcon],svg[mynaui-user-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 7.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path><svg:path d="M12 2.25A9.75 9.75 0 0 0 2.25 12a9.74 9.74 0 0 0 4 7.875l.001-.413C6.434 15.883 9.272 14.11 12 14.11s5.566 1.773 5.749 5.352l.001.413a9.74 9.74 0 0 0 4-7.875A9.75 9.75 0 0 0 12 2.25m-3.25 7a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path d="M16.259 20.773c-.004-.78-.007-1.209-.008-1.235c-.134-2.608-2.137-3.928-4.251-3.928s-4.117 1.32-4.251 3.928c-.001.026-.004.454-.008 1.235A9.7 9.7 0 0 0 12 21.75a9.7 9.7 0 0 0 4.259-.977"></svg:path></svg:g>`,
})
export class MynauiUserCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUserDiamondSolidIcon],svg[mynaui-user-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 7.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path><svg:path d="M12 1.25a3.16 3.16 0 0 0-2.235.926L2.177 9.765a3.16 3.16 0 0 0 0 4.47l4.206 4.207C7.001 15.546 9.545 14.11 12 14.11s4.999 1.436 5.617 4.332l4.206-4.207a3.16 3.16 0 0 0 0-4.47l-7.588-7.588A3.16 3.16 0 0 0 12 1.25m-3.25 8a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path d="m16.253 19.805l-.002-.267C16.117 16.93 14.114 15.61 12 15.61s-4.117 1.32-4.251 3.928l-.002.267l2.018 2.018a3.16 3.16 0 0 0 4.47 0z"></svg:path></svg:g>`,
})
export class MynauiUserDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUserHexagonSolidIcon],svg[mynaui-user-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 7.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path><svg:path d="M12 1.75a2.63 2.63 0 0 0-1.32.355l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l2.186 1.257C6.492 15.847 9.3 14.11 12 14.11s5.508 1.737 5.743 5.242l2.186-1.257l.003-.002a2.65 2.65 0 0 0 1.318-2.291V8.199a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002A2.63 2.63 0 0 0 12 1.75m-3.25 7.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path d="m16.256 20.207l-.005-.669C16.117 16.93 14.114 15.61 12 15.61s-4.117 1.32-4.251 3.928c0 .019-.003.248-.005.669l2.935 1.687h.002a2.63 2.63 0 0 0 2.639 0h.001z"></svg:path></svg:g>`,
})
export class MynauiUserHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUserMinusSolidIcon],svg[mynaui-user-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 7.5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m11.999 12.962a.75.75 0 0 1-.71.787c-2.08.106-11.713.171-15.077 0a.75.75 0 0 1-.711-.787C4.013 15.314 8.058 12.75 12 12.75s7.987 2.563 8.249 7.712M10 16.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiUserMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUserOctagonSolidIcon],svg[mynaui-user-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 7.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path><svg:path d="M8.937 2.25a2.3 2.3 0 0 0-.9.158c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l3.312 3.312l.001-.575C6.434 15.883 9.272 14.11 12 14.11s5.566 1.773 5.749 5.352v.575l3.313-3.312c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158zm-.187 7a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path d="m16.262 21.439l-.011-1.9c-.134-2.609-2.137-3.93-4.251-3.93s-4.117 1.321-4.251 3.93c-.002.031-.005.698-.01 1.9q.132.083.284.148c.298.124.601.163.914.163h6.126c.302 0 .602-.035.9-.158q.159-.065.299-.153"></svg:path></svg:g>`,
})
export class MynauiUserOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUserPlusSolidIcon],svg[mynaui-user-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 7.5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m11.999 12.962c-.262-5.148-4.307-7.712-8.249-7.712s-7.987 2.563-8.249 7.712a.75.75 0 0 0 .71.787c3.365.171 12.998.106 15.077 0a.75.75 0 0 0 .711-.787M12 14.75a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V15.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiUserPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUserSettingsSolidIcon],svg[mynaui-user-settings-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m8.249 16.712c-.262-5.148-4.307-7.712-8.249-7.712s-7.987 2.563-8.249 7.712a.75.75 0 0 0 .71.787c3.365.171 12.998.106 15.077 0a.75.75 0 0 0 .711-.787m-8.876-5.325c.18-.075.386-.137.627-.137s.446.062.627.137c.159.066.334.16.511.254l.18.096c.177.094.353.188.495.282c.16.106.332.247.465.458c.134.215.183.433.204.628c.018.167.018.36.018.546v.198c0 .186 0 .38-.018.546c-.02.195-.07.413-.204.628a1.5 1.5 0 0 1-.465.458a6 6 0 0 1-.495.282l-.18.096a6 6 0 0 1-.511.254c-.18.076-.386.137-.627.137s-.446-.061-.627-.137c-.159-.066-.334-.16-.511-.254l-.18-.096a6 6 0 0 1-.495-.282a1.5 1.5 0 0 1-.465-.458a1.44 1.44 0 0 1-.204-.628c-.018-.167-.018-.36-.018-.546V17.4c0-.186 0-.38.018-.546c.02-.195.07-.413.204-.628c.133-.211.305-.352.465-.458c.143-.094.318-.188.495-.282l.18-.096c.177-.094.352-.188.511-.254"></svg:path><svg:path d="M11.545 16.727c.209-.111.321-.17.407-.206l.048-.018q.014.004.048.018c.086.036.198.095.408.206l.133.071c.21.112.32.172.396.222l.007.005q.005.046.006.14c.002.073.002.157.002.264v.142c0 .107 0 .191-.002.263q0 .096-.006.142l-.007.004c-.075.05-.186.11-.396.222l-.133.07c-.21.112-.322.171-.408.207l-.048.018l-.048-.018a6 6 0 0 1-.408-.206l-.133-.071a6 6 0 0 1-.396-.222l-.007-.005a2 2 0 0 1-.006-.14C11 17.761 11 17.677 11 17.57v-.142c0-.107 0-.191.002-.263q0-.096.006-.142l.007-.004c.075-.05.186-.11.396-.222z"></svg:path></svg:g>`,
})
export class MynauiUserSettingsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUserSolidIcon],svg[mynaui-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.75c3.942 0 7.987 2.563 8.249 7.712a.75.75 0 0 1-.71.787c-2.08.106-11.713.171-15.077 0a.75.75 0 0 1-.711-.787C4.013 15.314 8.058 12.75 12 12.75m0-9a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"></svg:path>`,
})
export class MynauiUserSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUserSquareSolidIcon],svg[mynaui-user-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 7.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path><svg:path d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.428.219.89.341 1.409.412a331 331 0 0 1-.002-2.182C6.434 15.883 9.272 14.11 12 14.11s5.566 1.773 5.749 5.352c.002.034.001.803-.002 2.182c.52-.071.98-.193 1.41-.412a4.75 4.75 0 0 0 2.075-2.075c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm-.617 7a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path d="M16.263 21.74a421 421 0 0 0-.012-2.202C16.117 16.93 14.114 15.61 12 15.61s-4.117 1.32-4.251 3.928c-.002.035-.006.81-.012 2.202c.48.01 1.02.01 1.63.01h5.266c.61 0 1.15 0 1.63-.01"></svg:path></svg:g>`,
})
export class MynauiUserSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUserWavesSolidIcon],svg[mynaui-user-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 7.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path><svg:path d="M13.435 2.075a3.33 3.33 0 0 0-2.87 0c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03q.122.042.253.074l.001-.645C6.434 15.883 9.272 14.11 12 14.11s5.566 1.773 5.749 5.352v.645q.132-.032.254-.075a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928M8.75 9.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path d="m16.256 20.285l-.005-.747C16.117 16.93 14.114 15.61 12 15.61s-4.117 1.32-4.251 3.928c-.001.02-.003.276-.005.747c.58.061 1.019.25 1.482.646l.078.066c.506.431.867.74 1.261.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.455-.388.891-.583 1.482-.646"></svg:path></svg:g>`,
})
export class MynauiUserWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUserXSolidIcon],svg[mynaui-user-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 7.5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m11.999 12.962c-.262-5.148-4.307-7.712-8.249-7.712s-7.987 2.563-8.249 7.712a.75.75 0 0 0 .71.787c3.365.171 12.998.106 15.077 0a.75.75 0 0 0 .711-.787M10.055 15.22a.75.75 0 0 1 1.061 0l.884.883l.884-.883a.75.75 0 0 1 1.06 1.06l-.883.884l.883.884a.75.75 0 0 1-1.06 1.06L12 18.226l-.884.884a.75.75 0 1 1-1.06-1.06l.883-.885l-.884-.884a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiUserXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUsersGroupSolidIcon],svg[mynaui-users-group-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.75 7.5A2.25 2.25 0 0 1 9.5 5.823a.75.75 0 0 0 1-1.118a3.75 3.75 0 1 0-5 5.59a.75.75 0 0 0 1-1.118A2.24 2.24 0 0 1 5.75 7.5M16 3.75a3.74 3.74 0 0 0-2.5.955a.75.75 0 0 0 1 1.118a2.25 2.25 0 0 1 3 3.355a.75.75 0 0 0 1 1.117A3.75 3.75 0 0 0 16 3.75"></svg:path><svg:path d="M12 6.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m-5.81 7.726a.75.75 0 0 0-.38-1.452c-.97.255-1.836.682-2.474 1.256c-.64.575-1.086 1.336-1.086 2.22a.75.75 0 0 0 1.5 0c0-.346.17-.729.59-1.105c.42-.378 1.054-.71 1.85-.92m12-1.45a.75.75 0 0 0-.38 1.45c.796.21 1.43.542 1.85.92c.42.376.59.76.59 1.105a.75.75 0 0 0 1.5 0c0-.884-.446-1.645-1.086-2.22c-.638-.574-1.504-1.001-2.474-1.255M12 15.75c-1.493 0-2.881.362-3.921.986c-1.025.615-1.829 1.569-1.829 2.764a.75.75 0 0 0 1.5 0c0-.462.316-1.007 1.1-1.478c.77-.462 1.882-.772 3.15-.772s2.38.31 3.15.772c.784.47 1.1 1.017 1.1 1.478a.75.75 0 0 0 1.5 0c0-1.195-.804-2.15-1.829-2.764c-1.04-.624-2.428-.986-3.921-.986"></svg:path></svg:g>`,
})
export class MynauiUsersGroupSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiUsersSolidIcon],svg[mynaui-users-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13c-1.915 0-3.603.965-4.792 2.245c-1.182 1.273-1.958 2.948-1.958 4.505c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75c0-1.558-.775-3.232-1.958-4.505C12.602 13.965 10.915 13 9 13m8.204.301a.75.75 0 0 0-.408 1.444c.933.264 1.801 1.019 2.45 2.014c.647.995 1.004 2.122 1.004 2.99a.75.75 0 0 0 1.5 0c0-1.22-.478-2.627-1.248-3.808c-.769-1.181-1.9-2.244-3.298-2.64M9 3.5A3.75 3.75 0 1 0 9 11a3.75 3.75 0 0 0 0-7.5m6 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75a3.75 3.75 0 1 0 0-7.5"></svg:path>`,
})
export class MynauiUsersSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiVideoSlashSolidIcon],svg[mynaui-video-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5.5a2.75 2.75 0 0 0-2.75 2.75v7.5a2.75 2.75 0 0 0 2.237 2.702L2.47 20.47a.75.75 0 1 0 1.06 1.06l3.03-3.03h6.94a2.75 2.75 0 0 0 2.75-2.75v-1.594l3.419 3.045c.805.717 2.081.145 2.081-.934V7.365c0-1.08-1.276-1.651-2.081-.934L16.25 9.476V8.81l5.28-5.28a.75.75 0 0 0-1.06-1.061l-4.523 4.523A2.75 2.75 0 0 0 13.5 5.5z"></svg:path>`,
})
export class MynauiVideoSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiVideoSolidIcon],svg[mynaui-video-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5.5a2.75 2.75 0 0 0-2.75 2.75v7.5A2.75 2.75 0 0 0 5 18.5h8.5a2.75 2.75 0 0 0 2.75-2.75v-1.594l3.419 3.045c.805.717 2.081.145 2.081-.934V7.365c0-1.08-1.276-1.651-2.081-.934L16.25 9.476V8.25A2.75 2.75 0 0 0 13.5 5.5z"></svg:path>`,
})
export class MynauiVideoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiVolumeCheckSolidIcon],svg[mynaui-volume-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.748 6.369a14 14 0 0 0-.231.337l-.165-.015a11 11 0 0 0-1.442-.03c-.518.028-1.119.11-1.614.337c-.52.24-1.046.713-1.046 1.507v6.914c0 .795.525 1.268 1.046 1.508c.495.227 1.097.309 1.614.337a11 11 0 0 0 1.603-.044q.099.151.231.343c.314.452.772 1.056 1.35 1.663C9.217 20.41 10.93 21.75 13 21.75a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75c-2.065 0-3.776 1.315-4.902 2.482a14 14 0 0 0-1.35 1.637m14.865 4.071a.75.75 0 1 0-1.216-.88l-2.467 3.417l-1.005-1.148a.75.75 0 0 0-1.13.987l1.38 1.576c.443.507 1.244.47 1.639-.077z"></svg:path>`,
})
export class MynauiVolumeCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiVolumeHighSolidIcon],svg[mynaui-volume-high-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.57 4.47a.75.75 0 0 1 1.06 0c4.16 4.159 4.16 10.901 0 15.06a.75.75 0 1 1-1.06-1.06a9.15 9.15 0 0 0 0-12.94a.75.75 0 0 1 0-1.06"></svg:path><svg:path d="M15.47 7.47a.75.75 0 0 1 1.06 0a6.407 6.407 0 0 1 0 9.06a.75.75 0 1 1-1.06-1.06a4.907 4.907 0 0 0 0-6.94a.75.75 0 0 1 0-1.06M6.748 6.369a14 14 0 0 0-.231.337l-.165-.015a11 11 0 0 0-1.442-.03c-.518.028-1.119.11-1.614.337c-.52.24-1.046.713-1.046 1.507v6.914c0 .795.525 1.268 1.046 1.508c.495.227 1.097.309 1.614.337a11 11 0 0 0 1.603-.044q.099.151.231.343c.314.452.772 1.056 1.35 1.663C9.217 20.41 10.93 21.75 13 21.75a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75c-2.065 0-3.776 1.315-4.902 2.482a14 14 0 0 0-1.35 1.637"></svg:path></svg:g>`,
})
export class MynauiVolumeHighSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiVolumeLowSolidIcon],svg[mynaui-volume-low-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.47 7.47a.75.75 0 0 1 1.06 0a6.407 6.407 0 0 1 0 9.06a.75.75 0 1 1-1.06-1.06a4.907 4.907 0 0 0 0-6.94a.75.75 0 0 1 0-1.06M6.748 6.369a14 14 0 0 0-.231.337l-.165-.015a11 11 0 0 0-1.442-.03c-.518.028-1.119.11-1.614.337c-.52.24-1.046.713-1.046 1.507v6.914c0 .795.525 1.268 1.046 1.508c.495.227 1.097.309 1.614.337a11 11 0 0 0 1.603-.044q.099.151.231.343c.314.452.772 1.056 1.35 1.663C9.217 20.41 10.93 21.75 13 21.75a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75c-2.065 0-3.776 1.315-4.902 2.482a14 14 0 0 0-1.35 1.637"></svg:path>`,
})
export class MynauiVolumeLowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiVolumeMinusSolidIcon],svg[mynaui-volume-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 12a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M6.748 6.369a14 14 0 0 0-.231.337l-.165-.015a11 11 0 0 0-1.442-.03c-.518.028-1.119.11-1.614.337c-.52.24-1.046.713-1.046 1.507v6.914c0 .795.525 1.268 1.046 1.508c.495.227 1.097.309 1.614.337a11 11 0 0 0 1.603-.044q.099.151.231.343c.314.452.772 1.056 1.35 1.663C9.217 20.41 10.93 21.75 13 21.75a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75c-2.065 0-3.776 1.315-4.902 2.482a14 14 0 0 0-1.35 1.637"></svg:path>`,
})
export class MynauiVolumeMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiVolumeNoneSolidIcon],svg[mynaui-volume-none-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.748 6.369a14 14 0 0 0-.231.337l-.165-.015a11 11 0 0 0-1.442-.03c-.518.028-1.119.11-1.614.337c-.52.24-1.046.713-1.046 1.507v6.914c0 .795.525 1.268 1.046 1.508c.495.227 1.097.309 1.614.337a11 11 0 0 0 1.603-.044q.099.151.231.343c.314.452.772 1.056 1.35 1.663C9.217 20.41 10.93 21.75 13 21.75a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75c-2.065 0-3.776 1.315-4.902 2.482a14 14 0 0 0-1.35 1.637"></svg:path>`,
})
export class MynauiVolumeNoneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiVolumePlusSolidIcon],svg[mynaui-volume-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 8.75a.75.75 0 0 1 .75.75v1.75H21a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H16a.75.75 0 0 1 0-1.5h1.75V9.5a.75.75 0 0 1 .75-.75M6.748 6.369a14 14 0 0 0-.231.337l-.165-.015a11 11 0 0 0-1.442-.03c-.518.028-1.119.11-1.614.337c-.52.24-1.046.713-1.046 1.507v6.914c0 .795.525 1.268 1.046 1.508c.495.227 1.097.309 1.614.337a11 11 0 0 0 1.603-.044q.099.151.231.343c.314.452.772 1.056 1.35 1.663C9.217 20.41 10.93 21.75 13 21.75a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75c-2.065 0-3.776 1.315-4.902 2.482a14 14 0 0 0-1.35 1.637"></svg:path>`,
})
export class MynauiVolumePlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiVolumeSlashSolidIcon],svg[mynaui-volume-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.63 19.53a.75.75 0 1 1-1.06-1.06c3.24-3.24 3.542-8.305.907-11.886L17.03 8.031a6.41 6.41 0 0 1-.5 8.5a.75.75 0 1 1-1.06-1.061a4.91 4.91 0 0 0 .49-6.37l-2.21 2.21V21a.75.75 0 0 1-.75.75c-2.07 0-3.782-1.34-4.907-2.524A14 14 0 0 1 7.06 18l-3.53 3.53a.75.75 0 0 1-1.06-1.06l3.198-3.198c-.24.006-.498.005-.758-.008c-.518-.028-1.119-.11-1.614-.337c-.52-.24-1.046-.713-1.046-1.508V8.506c0-.794.525-1.267 1.046-1.507c.495-.228 1.097-.31 1.614-.337a11 11 0 0 1 1.607.045q.098-.15.23-.337c.315-.445.773-1.04 1.35-1.637C9.225 3.565 10.936 2.25 13 2.25a.75.75 0 0 1 .75.75v6.19l3.746-3.746a.75.75 0 0 1 1.048-1.049L20.47 2.47a.75.75 0 1 1 1.06 1.06l-1.982 1.983c3.215 4.176 2.91 10.19-.917 14.017"></svg:path>`,
})
export class MynauiVolumeSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiVolumeXSolidIcon],svg[mynaui-volume-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.47 9.47a.75.75 0 0 1 1.06 0L19 10.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L20.06 12l1.47 1.47a.75.75 0 1 1-1.06 1.06L19 13.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L17.94 12l-1.47-1.47a.75.75 0 0 1 0-1.06M6.748 6.369a14 14 0 0 0-.231.337l-.165-.015a11 11 0 0 0-1.442-.03c-.518.028-1.119.11-1.614.337c-.52.24-1.046.713-1.046 1.507v6.914c0 .795.525 1.268 1.046 1.508c.495.227 1.097.309 1.614.337a11 11 0 0 0 1.603-.044q.099.151.231.343c.314.452.772 1.056 1.35 1.663C9.217 20.41 10.93 21.75 13 21.75a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75c-2.065 0-3.776 1.315-4.902 2.482a14 14 0 0 0-1.35 1.637"></svg:path>`,
})
export class MynauiVolumeXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWatchSolidIcon],svg[mynaui-watch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.681 2.25c-.673 0-1.224.237-1.649.634c-.404.378-.66.87-.834 1.34a9 9 0 0 0-.373 1.429l-.092.504q-.048.276-.095.51C6.498 7.303 5.75 8.586 5.75 10v4c0 1.415.748 2.698 1.888 3.332q.047.235.095.511q.04.23.092.504c.086.45.198.956.373 1.43c.174.47.43.961.834 1.34c.425.396.976.633 1.65.633h2.637c.673 0 1.224-.237 1.649-.634c.405-.378.66-.87.834-1.34c.175-.473.287-.979.373-1.429l.092-.504q.048-.276.095-.51c1.14-.635 1.888-1.918 1.888-3.333v-4c0-1.415-.748-2.698-1.888-3.332q-.047-.235-.095-.511l-.092-.504a9 9 0 0 0-.373-1.43c-.174-.47-.43-.961-.834-1.34a2.35 2.35 0 0 0-1.65-.633zm-1.431 4h-.01l.059-.315c.082-.43.175-.837.306-1.191c.133-.358.285-.609.452-.765c.147-.138.333-.229.624-.229h2.638c.291 0 .477.091.624.23c.167.155.32.406.452.764c.13.354.224.762.306 1.19q.03.153.058.316zm.049 11.815q-.03-.152-.058-.315h5.519l-.059.315a7.6 7.6 0 0 1-.306 1.191c-.133.358-.285.609-.452.765c-.147.138-.333.229-.624.229H10.68c-.291 0-.477-.091-.624-.23c-.167-.155-.32-.406-.452-.764a7.6 7.6 0 0 1-.306-1.19M12.75 10v2.084l1.25.78a.75.75 0 0 1-.793 1.272l-1.604-1a.75.75 0 0 1-.353-.636V10a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiWatchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWavesSolidIcon],svg[mynaui-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.435 2.075a3.33 3.33 0 0 0-2.87 0c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.078.066c.506.431.867.74 1.261.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928"></svg:path>`,
})
export class MynauiWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWebcamSolidIcon],svg[mynaui-webcam-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.05 10.2a7.95 7.95 0 1 1 8.7 7.915v2.135h3.75a.75.75 0 1 1 0 1.5h-9a.75.75 0 0 1 0-1.5h3.75v-2.135a7.95 7.95 0 0 1-7.2-7.915m6 0a1.95 1.95 0 1 0 3.9 0a1.95 1.95 0 0 0-3.9 0"></svg:path>`,
})
export class MynauiWebcamSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWheelSolidIcon],svg[mynaui-wheel-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.26 7.242l4.823 2.785q.233-.225.508-.389l-1.442-5.38a8.2 8.2 0 0 0-3.89 2.984m5.338-3.372l1.441 5.38q.319.004.635.083l2.785-4.824a8.2 8.2 0 0 0-4.861-.64m6.16 1.39l-2.785 4.823q.225.234.389.508l5.38-1.442a8.2 8.2 0 0 0-2.984-3.89m3.372 5.338l-5.38 1.441a2.7 2.7 0 0 1-.083.635l4.824 2.785a8.2 8.2 0 0 0 .64-4.861m-1.39 6.16l-4.823-2.785q-.234.225-.508.389l1.442 5.38a8.2 8.2 0 0 0 3.89-2.984m-5.338 3.372l-1.441-5.38a2.7 2.7 0 0 1-.635-.083L8.541 19.49a8.2 8.2 0 0 0 4.861.64m-6.16-1.39l2.785-4.823a2.7 2.7 0 0 1-.389-.508l-5.38 1.442a8.2 8.2 0 0 0 2.984 3.89M3.87 13.403l5.38-1.441q.004-.319.083-.635L4.509 8.541a8.2 8.2 0 0 0-.64 4.861m-.314-6.277C6.25 2.462 12.212.864 16.875 3.556s6.261 8.656 3.569 13.319s-8.656 6.261-13.32 3.569C2.463 17.75.865 11.788 3.557 7.125"></svg:path>`,
})
export class MynauiWheelSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWheelchairSolidIcon],svg[mynaui-wheelchair-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.938 3.938a2.35 2.35 0 1 1 2.675 3.783l.628 5.654a.25.25 0 0 0 .263.222l5.043-.288a1.75 1.75 0 0 1 1.848 1.668l.11 2.434a.25.25 0 0 0 .25.239H19a.75.75 0 0 1 0 1.5h-.244a1.75 1.75 0 0 1-1.749-1.67l-.11-2.435a.25.25 0 0 0-.264-.239l-5.044.289A1.75 1.75 0 0 1 9.75 13.54L9.123 7.9a2.35 2.35 0 0 1-1.185-3.963M12 10.4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-3.518.122a.75.75 0 0 1-.37.995a4.05 4.05 0 1 0 5.61 4.696a.75.75 0 1 1 1.453.374A5.552 5.552 0 0 1 4.25 15.2a5.55 5.55 0 0 1 3.237-5.046a.75.75 0 0 1 .995.368"></svg:path>`,
})
export class MynauiWheelchairSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWifiCheckSolidIcon],svg[mynaui-wifi-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.25c-3.415 0-6.827 1.26-9.484 3.777a.75.75 0 0 1-1.032-1.089A15.25 15.25 0 0 1 12 4.75a.75.75 0 0 1 0 1.5m-7.53 7.18a.75.75 0 0 1 0-1.06c4.159-4.16 10.901-4.16 15.06 0a.75.75 0 1 1-1.06 1.06a9.15 9.15 0 0 0-12.94 0a.75.75 0 0 1-1.06 0m3 3.257a.75.75 0 0 1 0-1.06a6.407 6.407 0 0 1 9.06 0a.75.75 0 0 1-1.06 1.06a4.907 4.907 0 0 0-6.94 0a.75.75 0 0 1-1.06 0M12 18a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 12 18m8.253-13.56a.75.75 0 0 0-1.216-.88L16.57 6.978L15.564 5.83a.75.75 0 1 0-1.128.987l1.378 1.576a1.05 1.05 0 0 0 1.64-.077z"></svg:path>`,
})
export class MynauiWifiCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWifiLowSolidIcon],svg[mynaui-wifi-low-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.47 15.627a6.407 6.407 0 0 1 9.06 0a.75.75 0 0 1-1.06 1.06a4.907 4.907 0 0 0-6.94 0a.75.75 0 1 1-1.06-1.06M12 18a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 12 18"></svg:path>`,
})
export class MynauiWifiLowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWifiMediumSolidIcon],svg[mynaui-wifi-medium-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.47 12.37c4.159-4.16 10.901-4.16 15.06 0a.75.75 0 1 1-1.06 1.06a9.15 9.15 0 0 0-12.94 0a.75.75 0 0 1-1.06-1.06m3 3.257a6.407 6.407 0 0 1 9.06 0a.75.75 0 0 1-1.06 1.06a4.907 4.907 0 0 0-6.94 0a.75.75 0 1 1-1.06-1.06M12 18a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 12 18"></svg:path>`,
})
export class MynauiWifiMediumSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWifiMinusSolidIcon],svg[mynaui-wifi-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.25c-3.415 0-6.827 1.26-9.484 3.777a.75.75 0 0 1-1.032-1.089A15.25 15.25 0 0 1 12 4.75a.75.75 0 0 1 0 1.5M14.75 6a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M4.47 13.43a.75.75 0 0 1 0-1.06c4.159-4.16 10.901-4.16 15.06 0a.75.75 0 1 1-1.06 1.06a9.15 9.15 0 0 0-12.94 0a.75.75 0 0 1-1.06 0m3 3.257a.75.75 0 0 1 0-1.06a6.407 6.407 0 0 1 9.06 0a.75.75 0 0 1-1.06 1.06a4.907 4.907 0 0 0-6.94 0a.75.75 0 0 1-1.06 0M12 18a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 12 18"></svg:path>`,
})
export class MynauiWifiMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWifiPlusSolidIcon],svg[mynaui-wifi-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2.75a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75V8.5a.75.75 0 0 1-1.5 0V6.75H15.5a.75.75 0 0 1 0-1.5h1.75V3.5a.75.75 0 0 1 .75-.75m-6 3.5c-3.415 0-6.827 1.26-9.484 3.777a.75.75 0 0 1-1.032-1.089A15.25 15.25 0 0 1 12 4.75a.75.75 0 0 1 0 1.5m-7.53 7.18a.75.75 0 0 1 0-1.06c4.159-4.16 10.901-4.16 15.06 0a.75.75 0 1 1-1.06 1.06a9.15 9.15 0 0 0-12.94 0a.75.75 0 0 1-1.06 0m3 3.257a.75.75 0 0 1 0-1.06a6.407 6.407 0 0 1 9.06 0a.75.75 0 0 1-1.06 1.06a4.907 4.907 0 0 0-6.94 0a.75.75 0 0 1-1.06 0M12 18a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 12 18"></svg:path>`,
})
export class MynauiWifiPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWifiSlashSolidIcon],svg[mynaui-wifi-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.53 2.47a.75.75 0 0 1 0 1.06l-2.783 2.784a15.3 15.3 0 0 1 3.769 2.624a.75.75 0 0 1-1.032 1.089a13.7 13.7 0 0 0-3.865-2.585L15.29 9.769c1.55.503 3.009 1.37 4.24 2.6a.75.75 0 1 1-1.061 1.06a9.1 9.1 0 0 0-4.396-2.442l-2.805 2.805a6.4 6.4 0 0 1 5.261 1.835a.75.75 0 0 1-1.06 1.06a4.907 4.907 0 0 0-6.94 0a.75.75 0 0 1-.356.2L3.53 21.53a.75.75 0 0 1-1.06-1.06l18-18a.75.75 0 0 1 1.06 0M12 6.25c-3.415 0-6.827 1.26-9.484 3.777a.75.75 0 0 1-1.032-1.089A15.25 15.25 0 0 1 12 4.75a.75.75 0 0 1 0 1.5m-2.285 3.987a.75.75 0 0 1-.488.941A9.1 9.1 0 0 0 5.53 13.43a.75.75 0 0 1-1.06-1.06a10.6 10.6 0 0 1 4.303-2.622a.75.75 0 0 1 .942.489M12 18a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 12 18"></svg:path>`,
})
export class MynauiWifiSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWifiSolidIcon],svg[mynaui-wifi-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.484 10.027c-5.314-5.036-13.654-5.036-18.968 0a.75.75 0 1 1-1.032-1.089c5.893-5.584 15.14-5.584 21.032 0a.75.75 0 0 1-1.032 1.09M4.47 12.37c4.159-4.159 10.901-4.159 15.06 0a.75.75 0 0 1-1.06 1.06a9.15 9.15 0 0 0-12.94 0a.75.75 0 1 1-1.06-1.06m3 3.258a6.407 6.407 0 0 1 9.06 0a.75.75 0 0 1-1.06 1.06a4.907 4.907 0 0 0-6.94 0a.75.75 0 0 1-1.06-1.06M12 18a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 12 18"></svg:path>`,
})
export class MynauiWifiSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWifiXSolidIcon],svg[mynaui-wifi-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.47 3.47a.75.75 0 0 1 1.06 0L18 4.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L19.06 6l1.47 1.47a.75.75 0 0 1-1.06 1.06L18 7.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L16.94 6l-1.47-1.47a.75.75 0 0 1 0-1.06M12 6.25c-3.415 0-6.827 1.26-9.484 3.777a.75.75 0 0 1-1.032-1.089A15.25 15.25 0 0 1 12 4.75a.75.75 0 0 1 0 1.5m-7.53 7.18a.75.75 0 0 1 0-1.06c4.159-4.16 10.901-4.16 15.06 0a.75.75 0 1 1-1.06 1.06a9.15 9.15 0 0 0-12.94 0a.75.75 0 0 1-1.06 0m3 3.257a.75.75 0 0 1 0-1.06a6.407 6.407 0 0 1 9.06 0a.75.75 0 0 1-1.06 1.06a4.907 4.907 0 0 0-6.94 0a.75.75 0 0 1-1.06 0M12 18a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 12 18"></svg:path>`,
})
export class MynauiWifiXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWindsSolidIcon],svg[mynaui-winds-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.575 7a.75.75 0 0 1 .75-.75c1.063 0 1.921.388 2.51 1.02c.577.622.854 1.436.854 2.23s-.277 1.608-.855 2.23c-.588.632-1.446 1.02-2.51 1.02H3a.75.75 0 0 1 0-1.5h15.325c.679 0 1.128-.237 1.41-.542c.294-.316.454-.752.454-1.208s-.16-.892-.453-1.208c-.283-.305-.732-.542-1.411-.542a.75.75 0 0 1-.75-.75M2.25 16a.75.75 0 0 1 .75-.75h15.411c1.057 0 1.91.39 2.493 1.023c.573.622.846 1.435.846 2.227s-.273 1.605-.846 2.227c-.583.633-1.436 1.023-2.493 1.023a.75.75 0 0 1 0-1.5c.668 0 1.11-.235 1.39-.54c.29-.315.449-.752.449-1.21s-.159-.895-.45-1.21c-.279-.305-.72-.54-1.389-.54H3a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M10.122 3a.75.75 0 0 1 .75-.75c1.067 0 1.928.387 2.52 1.019c.58.622.86 1.436.86 2.231s-.28 1.61-.86 2.231c-.592.632-1.453 1.019-2.52 1.019H3a.75.75 0 0 1 0-1.5h7.872c.685 0 1.139-.238 1.424-.543c.295-.316.455-.752.455-1.207s-.16-.89-.455-1.207c-.285-.305-.739-.543-1.424-.543a.75.75 0 0 1-.75-.75"></svg:path></svg:g>`,
})
export class MynauiWindsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWineSolidIcon],svg[mynaui-wine-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2.25c-.69 0-1.25.56-1.25 1.25v5.75A5.75 5.75 0 0 0 11.25 15v5.25H8.4a.75.75 0 0 0 0 1.5h7.2a.75.75 0 0 0 0-1.5h-2.85V15a5.75 5.75 0 0 0 5.75-5.75V3.5c0-.69-.56-1.25-1.25-1.25z"></svg:path>`,
})
export class MynauiWineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWinkCircleSolidIcon],svg[mynaui-wink-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m6-1.5A.75.75 0 0 1 9 9.75h1a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75m7-.5v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 1.5 0m-6.852 4.553a.75.75 0 0 1 1.049-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 16.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.155-1.049"></svg:path>`,
})
export class MynauiWinkCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWinkGhostSolidIcon],svg[mynaui-wink-ghost-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12.044v6.517c0 .764.308 1.57.8 2.127c.501.567 1.354 1.012 2.287.543c.696-.35 1.275-.363 1.746-.047c1.126.755 2.708.755 3.834 0c.345-.23.607-.308.825-.31c.218-.001.485.072.84.31c1.127.755 2.709.755 3.835 0c.213-.142.58-.237 1.044-.226c.454.01.898.12 1.202.273c.933.469 1.786.024 2.287-.543c.492-.557.8-1.363.8-2.126v-6.518c0-5.405-4.362-9.794-9.75-9.794s-9.75 4.389-9.75 9.794m6.148 2.51a.75.75 0 0 1 1.049-.156c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 16.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.155-1.049M9 9.75h1a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1 0-1.5m5.5-.5a.75.75 0 0 1 .75.75v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiWinkGhostSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWinkSquareSolidIcon],svg[mynaui-wink-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm-.97 12.303a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 16.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.155-1.049M9 9.75h1a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1 0-1.5m5.5-.5a.75.75 0 0 1 .75.75v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiWinkSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiWrenchSolidIcon],svg[mynaui-wrench-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.598 2.343a6.433 6.433 0 0 1 7.419 7.5c-.125.682.008 1.28.359 1.63l5.566 5.567a2.76 2.76 0 0 1-3.902 3.902l-5.566-5.566c-.35-.35-.949-.484-1.63-.36a6.434 6.434 0 0 1-7.5-7.418a1.495 1.495 0 0 1 1.154-1.226c.54-.123 1.133.04 1.56.467l2.545 2.544a.197.197 0 0 0 .272 0l1.508-1.508a.197.197 0 0 0 0-.272L6.84 5.058a1.69 1.69 0 0 1-.467-1.56c.127-.56.562-1.04 1.226-1.155"></svg:path>`,
})
export class MynauiWrenchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiXCircleSolidIcon],svg[mynaui-x-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.22-3.53a.75.75 0 0 0 0 1.06L10.94 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06L12 13.06l2.47 2.47a.75.75 0 0 0 1.06-1.06L13.06 12l2.47-2.47a.75.75 0 0 0-1.06-1.06L12 10.94L9.53 8.47a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiXCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiXDiamondSolidIcon],svg[mynaui-x-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686M8.47 8.47a.75.75 0 0 1 1.06 0L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12L8.47 9.53a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiXDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiXHexagonSolidIcon],svg[mynaui-x-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0M8.47 8.47a.75.75 0 0 1 1.06 0L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12L8.47 9.53a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiXHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiXOctagonSolidIcon],svg[mynaui-x-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158H8.937a2.3 2.3 0 0 0-.9.158M8.47 8.47a.75.75 0 0 1 1.06 0L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12L8.47 9.53a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiXOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiXSolidIcon],svg[mynaui-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0-1.414-1.414L12 10.586z"></svg:path>`,
})
export class MynauiXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiXSquareSolidIcon],svg[mynaui-x-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12L8.47 9.53a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiXSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiXTriangleSolidIcon],svg[mynaui-x-triangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.583 4.507c-.948 1.338-1.953 3.318-3.24 5.853l-.39.768c-1.065 2.098-1.904 3.75-2.344 5.076c-.448 1.348-.55 2.552.121 3.623c.67 1.066 1.801 1.511 3.22 1.719c1.398.204 3.272.204 5.656.204h.788c2.384 0 4.258 0 5.656-.204c1.419-.208 2.55-.653 3.22-1.72c.671-1.07.569-2.274.12-3.622c-.44-1.325-1.278-2.978-2.343-5.076l-.39-.769c-1.287-2.534-2.292-4.514-3.24-5.852C14.462 3.159 13.418 2.25 12 2.25s-2.462.91-3.417 2.257m.887 6.463a.75.75 0 0 1 1.06 0L12 12.44l1.47-1.47a.75.75 0 1 1 1.06 1.06l-1.47 1.47l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 14.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiXTriangleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiXWavesSolidIcon],svg[mynaui-x-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M8.47 8.47a.75.75 0 0 1 1.06 0L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12L8.47 9.53a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiXWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiYenCircleSolidIcon],svg[mynaui-yen-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m5.82-5.114a.75.75 0 0 1 1.044.184L12 11.192l2.886-4.122a.75.75 0 0 1 1.229.86l-2.674 3.82h1.74a.75.75 0 0 1 0 1.5h-2.43v1h2.43a.75.75 0 0 1 0 1.5h-2.43v1.75a.75.75 0 0 1-1.5 0v-1.75H8.817a.75.75 0 0 1 0-1.5h2.432v-1H8.818a.75.75 0 0 1 0-1.5h1.742L7.886 7.93a.75.75 0 0 1 .184-1.044"></svg:path>`,
})
export class MynauiYenCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiYenDiamondSolidIcon],svg[mynaui-yen-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686M8.07 6.887a.75.75 0 0 1 1.044.184L12 11.192l2.886-4.122a.75.75 0 0 1 1.229.86l-2.674 3.82h1.74a.75.75 0 0 1 0 1.5h-2.43v1h2.43a.75.75 0 0 1 0 1.5h-2.43v1.75a.75.75 0 0 1-1.5 0v-1.75H8.817a.75.75 0 0 1 0-1.5h2.432v-1H8.818a.75.75 0 0 1 0-1.5h1.742L7.886 7.93a.75.75 0 0 1 .184-1.044"></svg:path>`,
})
export class MynauiYenDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiYenHexagonSolidIcon],svg[mynaui-yen-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0m-2.61 4.78a.75.75 0 0 1 1.044.185L12 11.192l2.886-4.122a.75.75 0 0 1 1.229.86l-2.674 3.82h1.74a.75.75 0 0 1 0 1.5h-2.43v1h2.43a.75.75 0 0 1 0 1.5h-2.43v1.75a.75.75 0 0 1-1.5 0v-1.75H8.817a.75.75 0 0 1 0-1.5h2.432v-1H8.818a.75.75 0 0 1 0-1.5h1.742L7.886 7.93a.75.75 0 0 1 .184-1.044"></svg:path>`,
})
export class MynauiYenHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiYenOctagonSolidIcon],svg[mynaui-yen-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158H8.937a2.3 2.3 0 0 0-.9.158m.033 4.478a.75.75 0 0 1 1.044.184L12 11.192l2.886-4.122a.75.75 0 0 1 1.229.86l-2.674 3.82h1.74a.75.75 0 0 1 0 1.5h-2.43v1h2.43a.75.75 0 0 1 0 1.5h-2.43v1.75a.75.75 0 0 1-1.5 0v-1.75H8.817a.75.75 0 0 1 0-1.5h2.432v-1H8.818a.75.75 0 0 1 0-1.5h1.742L7.886 7.93a.75.75 0 0 1 .184-1.044"></svg:path>`,
})
export class MynauiYenOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiYenSolidIcon],svg[mynaui-yen-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.568 2.887a.75.75 0 0 1 1.045.18L12 10.7l5.387-7.633a.75.75 0 0 1 1.226.866l-5.165 7.317h4.007a.75.75 0 0 1 0 1.5H12.75v2.75h4.705a.75.75 0 0 1 0 1.5H12.75v3.5a.75.75 0 0 1-1.5 0V17H6.546a.75.75 0 0 1 0-1.5h4.704v-2.75H6.546a.75.75 0 0 1 0-1.5h4.007L5.387 3.933a.75.75 0 0 1 .18-1.046"></svg:path>`,
})
export class MynauiYenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiYenSquareSolidIcon],svg[mynaui-yen-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM8.07 6.886a.75.75 0 0 1 1.044.184L12 11.192l2.886-4.122a.75.75 0 0 1 1.229.86l-2.674 3.82h1.74a.75.75 0 0 1 0 1.5h-2.43v1h2.43a.75.75 0 0 1 0 1.5h-2.43v1.75a.75.75 0 0 1-1.5 0v-1.75H8.817a.75.75 0 0 1 0-1.5h2.432v-1H8.818a.75.75 0 0 1 0-1.5h1.742L7.886 7.93a.75.75 0 0 1 .184-1.044"></svg:path>`,
})
export class MynauiYenSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiYenWavesSolidIcon],svg[mynaui-yen-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M8.07 6.885a.75.75 0 0 1 1.044.185L12 11.192l2.886-4.122a.75.75 0 0 1 1.229.86l-2.674 3.82h1.74a.75.75 0 0 1 0 1.5h-2.43v1h2.43a.75.75 0 0 1 0 1.5h-2.43v1.75a.75.75 0 0 1-1.5 0v-1.75H8.817a.75.75 0 0 1 0-1.5h2.432v-1H8.818a.75.75 0 0 1 0-1.5h1.742L7.886 7.93a.75.75 0 0 1 .184-1.044"></svg:path>`,
})
export class MynauiYenWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiZeroCircleSolidIcon],svg[mynaui-zero-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0v3a1.75 1.75 0 1 1-3.5 0z"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 7.25a3.25 3.25 0 0 0-3.25 3.25v3a3.25 3.25 0 0 0 6.5 0v-3A3.25 3.25 0 0 0 12 7.25"></svg:path></svg:g>`,
})
export class MynauiZeroCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiZeroDiamondSolidIcon],svg[mynaui-zero-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0v3a1.75 1.75 0 1 1-3.5 0z"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M12 7.25a3.25 3.25 0 0 0-3.25 3.25v3a3.25 3.25 0 0 0 6.5 0v-3A3.25 3.25 0 0 0 12 7.25"></svg:path></svg:g>`,
})
export class MynauiZeroDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiZeroHexagonSolidIcon],svg[mynaui-zero-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0v3a1.75 1.75 0 1 1-3.5 0z"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM12 7.25a3.25 3.25 0 0 0-3.25 3.25v3a3.25 3.25 0 0 0 6.5 0v-3A3.25 3.25 0 0 0 12 7.25"></svg:path></svg:g>`,
})
export class MynauiZeroHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiZeroOctagonSolidIcon],svg[mynaui-zero-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0v3a1.75 1.75 0 1 1-3.5 0z"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M12 7.25a3.25 3.25 0 0 0-3.25 3.25v3a3.25 3.25 0 0 0 6.5 0v-3A3.25 3.25 0 0 0 12 7.25"></svg:path></svg:g>`,
})
export class MynauiZeroOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiZeroSolidIcon],svg[mynaui-zero-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.875 7.75A2.375 2.375 0 0 0 9.5 10.125v3.75a2.375 2.375 0 1 0 4.75 0v-3.75a2.375 2.375 0 0 0-2.375-2.375M8 10.125a3.875 3.875 0 0 1 7.75 0v3.75a3.875 3.875 0 0 1-7.75 0z"></svg:path>`,
})
export class MynauiZeroSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiZeroSquareSolidIcon],svg[mynaui-zero-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0v3a1.75 1.75 0 1 1-3.5 0z"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m2.633 5a3.25 3.25 0 0 0-3.25 3.25v3a3.25 3.25 0 0 0 6.5 0v-3A3.25 3.25 0 0 0 12 7.25"></svg:path></svg:g>`,
})
export class MynauiZeroSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiZeroWavesSolidIcon],svg[mynaui-zero-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0v3a1.75 1.75 0 1 1-3.5 0z"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M12 7.25a3.25 3.25 0 0 0-3.25 3.25v3a3.25 3.25 0 0 0 6.5 0v-3A3.25 3.25 0 0 0 12 7.25"></svg:path></svg:g>`,
})
export class MynauiZeroWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
